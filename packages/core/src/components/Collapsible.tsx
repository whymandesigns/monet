import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import { skin } from '../utils/skin';

export const Collapsible = {
  Root: skin(BaseCollapsible.Root, 'monet-Collapsible'),
  Trigger: skin(BaseCollapsible.Trigger, 'monet-Collapsible-trigger'),
  Panel: skin(BaseCollapsible.Panel, 'monet-Collapsible-panel'),
};

export const Accordion = {
  Root: skin(BaseAccordion.Root, 'monet-Accordion'),
  Item: skin(BaseAccordion.Item, 'monet-Accordion-item'),
  Header: skin(BaseAccordion.Header, 'monet-Accordion-header'),
  Trigger: skin(BaseAccordion.Trigger, 'monet-Accordion-trigger'),
  Panel: skin(BaseAccordion.Panel, 'monet-Accordion-panel'),
};
