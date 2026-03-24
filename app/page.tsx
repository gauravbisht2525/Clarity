import Header from "@/components/layout/Header";
import DropZone from "@/components/upload/DropZone";
import PasteToggle from "@/components/upload/PasteToggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl flex flex-col items-center gap-8">

          {/* Hero */}
          <div className="text-center space-y-3">
            <h1 className="text-[56px] font-normal leading-tight tracking-tight text-primary">
              Understand any document<br />in seconds
            </h1>
            <p className="text-base text-secondary leading-relaxed max-w-md mx-auto">
              Upload a contract, agreement, or policy — we'll break it down into
              plain language and tell you what to do.
            </p>
          </div>

          {/* Upload card */}
          <DropZone />

          {/* Divider + paste option */}
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <PasteToggle />
          </div>

          {/* Trust signal */}
          <p className="text-xs text-muted italic">
            Your document is never stored
          </p>

        </div>
      </main>
    </div>
  );
}
