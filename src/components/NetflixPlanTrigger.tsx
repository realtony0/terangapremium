"use client";

import { useMemo, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import PlanModal from "./PlanModal";
import catalogData from "@data/sen_abonnement_catalog.json";
import { groupServicesByName } from "@/utils/catalog";
import type { CatalogCategory, CatalogService } from "@/types/catalog";

type NetflixPlanTriggerProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function NetflixPlanTrigger({
  children,
  className,
  onClick,
  ...rest
}: NetflixPlanTriggerProps) {
  const services = useMemo(
    () => groupServicesByName(catalogData as CatalogCategory[]),
    []
  );
  const netflixService = useMemo<CatalogService | undefined>(
    () => services.find((service) => service.name === "Netflix"),
    [services]
  );

  const [selectedService, setSelectedService] = useState<CatalogService | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick?.(event);
    if (netflixService) {
      setSelectedService(netflixService);
    }
  };

  return (
    <>
      <button
        type="button"
        {...rest}
        className={className}
        onClick={handleClick}
      >
        {children}
      </button>
      {selectedService && (
        <PlanModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </>
  );
}

