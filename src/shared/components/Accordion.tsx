import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface AccordionContextType {
  openItem: string | null;
  toggle: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null,
);

export function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      "UseAccordion doit etre utilise a l'interieur de Accordion",
    );
  return ctx;
}

function Accordion({ children }: PropsWithChildren) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (value: string) =>
    setOpenItem((previous) => (previous !== value ? value : previous));

  return (
    <AccordionContext value={{ openItem, toggle }}>
      <div className="divide-y divide-slate-700">{children}</div>
    </AccordionContext>
  );
}

function AccordionTrigger({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { openItem, toggle } = useAccordion();

  const isOpen = openItem === value;

  return (
    <button
      onClick={() => toggle(value)}
      aria-expanded={isOpen}
      className="w-full flex justify-between p-4 text-left"
    >
      {children}
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
  );
}

function AccordionItem({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

function AccordionContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { openItem } = useAccordion();

  if (openItem !== value) return null;

  return <div className="p-4">{children}</div>;
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
