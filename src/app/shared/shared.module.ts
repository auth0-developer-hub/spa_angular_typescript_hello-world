import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth0FeatureComponent } from './components/auth0-feature.component';
import { Auth0FeaturesComponent } from './components/auth0-features.component';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { CodeSnippetComponent } from './components/code-snippet.component';
import { HeroBannerComponent } from './components/hero-banner.component';
import { NavBarBrandComponent } from './components/navigation/desktop/nav-bar-brand.component';
import { NavBarButtonsComponent } from './components/navigation/desktop/nav-bar-buttons.component';
import { NavBarTabComponent } from './components/navigation/desktop/nav-bar-tab.component';
import { NavBarTabsComponent } from './components/navigation/desktop/nav-bar-tabs.component';
import { NavBarComponent } from './components/navigation/desktop/nav-bar.component';
import { MobileNavBarBrandComponent } from './components/navigation/mobile/mobile-nav-bar-brand.component';
import { MobileNavBarButtonsComponent } from './components/navigation/mobile/mobile-nav-bar-buttons.component';
import { MobileNavBarTabComponent } from './components/navigation/mobile/mobile-nav-bar-tab.component';
import { MobileNavBarTabsComponent } from './components/navigation/mobile/mobile-nav-bar-tabs.component';

import { MobileNavBarComponent } from './components/navigation/mobile/mobile-nav-bar.component';
import { PageFooterHyperlinkComponent } from './components/page-footer-hyperlink.component';
import { PageFooterComponent } from './components/page-footer.component';
import { PageLayoutComponent } from './components/page-layout.component';
import { PageLoaderComponent } from './components/page-loader.component';
import { ExternalApiService } from './services/external-api.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    PageFooterComponent,
    PageFooterHyperlinkComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    Auth0FeatureComponent,
    PageLoaderComponent,
    CodeSnippetComponent,
    NavBarComponent,
    NavBarBrandComponent,
    NavBarButtonsComponent,
    NavBarTabComponent,
    NavBarTabsComponent,
    MobileNavBarComponent,
    MobileNavBarBrandComponent,
    MobileNavBarButtonsComponent,
    MobileNavBarTabComponent,
    MobileNavBarTabsComponent,
    PageLayoutComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    PageFooterComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    CodeSnippetComponent,
    MobileNavBarComponent,
    PageLoaderComponent,
    PageLayoutComponent,
  ],
  providers: [ExternalApiService, MessageService],
})
export class SharedModule {}
