import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent, children: [
    {
      path: '',
      loadChildren: () => import('./mailing/mailing.module')
      .then(mod => mod.MailingModule)
    },
    {
      path: 'mailing',
      loadChildren: () => import('./mailing/mailing.module')
      .then(mod => mod.MailingModule)
    },
    {
      path: 'website',
      loadChildren: () => import('./mailing/mailing.module')
      .then(mod => mod.MailingModule)
    },
    {
      path: '',
      loadChildren: () => import('./mailing/mailing.module')
      .then(mod => mod.MailingModule)
    },
    {
      path: '**',
      loadChildren: () => import('./mailing/mailing.module')
      .then(mod => mod.MailingModule)
    },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
