import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { EditInvoiceResolverService } from './services/edit-invoice-resolver.service';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  exports: [InvoiceListingComponent, InvoiceFormComponent],
  providers: [InvoiceService, EditInvoiceResolverService]
})
export class InvoicesModule { }