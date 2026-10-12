import { Field as BaseField } from '@base-ui/react/field';
import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import { Form as BaseForm } from '@base-ui/react/form';
import { skin } from '../utils/skin';

export const Field = {
  Root: skin(BaseField.Root, 'monet-Field'),
  Label: skin(BaseField.Label, 'monet-Field-label'),
  Control: skin(BaseField.Control, 'monet-Field-control'),
  Description: skin(BaseField.Description, 'monet-Field-description'),
  Error: skin(BaseField.Error, 'monet-Field-error'),
  Item: skin(BaseField.Item, 'monet-Field-item'),
  /** Renders no element of its own; passed straight through. */
  Validity: BaseField.Validity,
};

export const Fieldset = {
  Root: skin(BaseFieldset.Root, 'monet-Fieldset'),
  Legend: skin(BaseFieldset.Legend, 'monet-Fieldset-legend'),
};

export const Form = skin(BaseForm, 'monet-Form');
