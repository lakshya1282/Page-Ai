import { NextResponse } from "next/server";
import Stripe from "stripe";
import pagesData from "@/data/pages.json";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2025-03-31.basil",
    })
  : null;

type PageEntry = {
  id: string;
  title: string;
  isPremium: boolean;
};

export async function POST(request: Request) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error: "Stripe is not configured. Add STRIPE_SECRET_KEY to continue.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as { pageId?: string };
    const pageId = body.pageId;

    if (!pageId) {
      return NextResponse.json(
        { error: "Missing premium page identifier." },
        { status: 400 },
      );
    }

    const page = (pagesData as PageEntry[]).find(
      (entry) => entry.id === pageId && entry.isPremium,
    );

    if (!page) {
      return NextResponse.json(
        { error: "This template is not available for premium checkout." },
        { status: 404 },
      );
    }

    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${appUrl}/?checkout=success&page=${page.id}`,
      cancel_url: `${appUrl}/?checkout=cancelled&page=${page.id}`,
      metadata: {
        pageId: page.id,
      },
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `${page.title} Premium Template`,
              description: "Premium AI landing page prompt access",
            },
            unit_amount: 20000,
          },
          quantity: 1,
        },
      ],
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create checkout.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
