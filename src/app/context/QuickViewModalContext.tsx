"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface QuickViewModalContextType {
  productId: string | null;
  isOpen: boolean;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const QuickViewModalContext = createContext<QuickViewModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [productId, setProductId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (id: string) => {
    setProductId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProductId(null);
  };

  return (
    <QuickViewModalContext.Provider value={{ productId, isOpen, openModal, closeModal }}>
      {children}
    </QuickViewModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(QuickViewModalContext);
  if (!context) throw new Error("useModalContext must be used within ModalProvider");
  return context;
};
