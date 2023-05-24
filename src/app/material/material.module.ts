import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents: any[] = [MatButtonModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
