import { Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Return a ControlValueAccessor provider for a component
 *
 * @param component The component you want to add as the useExisting property
 * of the provider
 */
export function ngCVAProvider(component: any): Provider {
  return {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: component,
  };
}
