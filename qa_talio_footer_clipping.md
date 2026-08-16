# Talio footer clipping investigation — 2026-08-16

The published Talio page loads successfully and reaches the partner CTA immediately above the footer. Browser inspection at the document bottom measured the Talio footer at exactly `106px` high with no internal padding and its lower edge aligned to the viewport bottom. This left no visual breathing room and made the footer appear clipped.

The fix raises the footer's content height, adds internal top/bottom padding and a small external bottom margin. On mobile it preserves the existing compact width while using dedicated internal padding and a smaller external gap.
