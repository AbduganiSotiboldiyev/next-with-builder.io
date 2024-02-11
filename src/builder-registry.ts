"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ReactMultiCarouusel from "./components/Reactmulticarousel/ReactMultiCarouusel";


Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ReactMultiCarouusel, {
  name: "ReactMultiCarouusel",
  inputs: [
    {
      name: "ReactMultiCarouusel",
      type: "img",
    },
  ],
});
