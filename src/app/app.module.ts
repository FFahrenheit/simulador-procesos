import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { LayoutComponent } from './layout/layout.component';
import { ManualInputComponent } from './input/manual-input/manual-input.component';
import { BatchProcessingComponent } from './simulators/batch-processing/batch-processing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiprogrammingComponent } from './simulators/multiprogramming/multiprogramming.component';
import { AutomaticInputComponent } from './input/automatic-input/automatic-input.component';
import { FcfsComponent } from './simulators/fcfs/fcfs.component';
import { BcpViewerComponent } from './viewers/bcp-viewer/bcp-viewer.component';
import { FcfsContinuacionComponent } from './simulators/fcfs-continuacion/fcfs-continuacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ManualInputComponent,
    BatchProcessingComponent,
    MultiprogrammingComponent,
    AutomaticInputComponent,
    FcfsComponent,
    BcpViewerComponent,
    FcfsContinuacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'increasing',
      extendedTimeOut: 3000,
      closeButton: true
    }),
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
