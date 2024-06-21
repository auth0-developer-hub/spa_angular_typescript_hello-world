import { Auth0FeatureComponent } from "./auth0-feature.component";
import { Auth0FeaturesComponent } from "./auth0-features.component";
import { CodeSnippetComponent } from "./code-snippet.component";
import { HeroBannerComponent } from "./hero-banner.component";
import { NAVIGATION_COMPONENTS } from "./navigation";
import { PageFooterHyperlinkComponent } from "./page-footer-hyperlink.component";
import { PageFooterComponent } from "./page-footer.component";
import { PageLayoutComponent } from "./page-layout.component";
import { PageLoaderComponent } from "./page-loader.component";

export const COMPONENTS = [
    ...NAVIGATION_COMPONENTS,
    Auth0FeatureComponent,
    Auth0FeaturesComponent,
    CodeSnippetComponent,
    HeroBannerComponent,
    PageFooterHyperlinkComponent,
    PageFooterComponent,
    PageLayoutComponent,
    PageLoaderComponent
];
