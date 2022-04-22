export interface Welcome2 {
    DomainData: DomainData;
    CommonData: CommonData;
    NtfyConfig: NtfyConfig;
    OTTData:    null;
    MobileData: null;
}

export interface CommonData {
    pcenterContinueWoAcceptLinkColor:     string;
    IabThirdPartyCookieUrl:               string;
    OptanonHideAcceptButton:              string;
    OptanonStyle:                         string;
    OptanonStaticContentLocation:         string;
    BannerCustomCSS:                      string;
    PCCustomCSS:                          string;
    PcTextColor:                          string;
    PcButtonColor:                        string;
    PcButtonTextColor:                    string;
    PcBackgroundColor:                    string;
    PcMenuColor:                          string;
    PcMenuHighLightColor:                 string;
    PcAccordionBackgroundColor:           string;
    PCenterExpandToViewText:              string;
    PcEnableToggles:                      boolean;
    PcLinksTextColor:                     string;
    TextColor:                            string;
    ButtonColor:                          string;
    BannerMPButtonColor:                  string;
    BannerMPButtonTextColor:              string;
    ButtonTextColor:                      string;
    BackgroundColor:                      string;
    BannerLinksTextColor:                 string;
    BannerAccordionBackgroundColor:       string;
    OptanonLogo:                          string;
    OneTrustFooterLogo:                   string;
    OptanonCookieDomain:                  string;
    OptanonGroupIdPerformanceCookies:     string;
    OptanonGroupIdFunctionalityCookies:   string;
    OptanonGroupIdTargetingCookies:       string;
    OptanonGroupIdSocialCookies:          string;
    ShowSubGroupCookies:                  boolean;
    LegacyBannerLayout:                   string;
    OptanonHideCookieSettingButton:       string;
    UseRTL:                               boolean;
    ShowBannerAcceptButton:               boolean;
    ShowBannerCookieSettings:             boolean;
    ShowCookieList:                       boolean;
    PCShowCookieHost:                     boolean;
    PCShowCookieDuration:                 boolean;
    PCShowCookieType:                     boolean;
    PCShowCookieCategory:                 boolean;
    PCShowCookieDescription:              boolean;
    AllowHostOptOut:                      boolean;
    CookieListTitleColor:                 string;
    CookieListGroupNameColor:             string;
    CookieListTableHeaderColor:           string;
    CookieListTableHeaderBackgroundColor: string;
    CookiesV2NewCookiePolicy:             boolean;
    CookieListPrimaryColor:               string;
    CookieListCustomCss:                  string;
    ConsentIntegration:                   ConsentIntegration;
    BConsentPurposesText:                 string;
    BFeaturesText:                        string;
    BLegitimateInterestPurposesText:      string;
    BSpecialFeaturesText:                 string;
    BSpecialPurposesText:                 string;
    BConsentText:                         string;
    BLegitInterestText:                   string;
    IabLegalTextUrl:                      string;
    PCCListName:                          string;
    PCCListHost:                          string;
    PCCListDuration:                      string;
    PCCListType:                          string;
    PCCListCategory:                      string;
    PCCListDescription:                   string;
    PCDialogClose:                        string;
    PcLegIntButtonColor:                  string;
    PcLegIntButtonTextColor:              string;
    BCategoryContainerColor:              string;
    BCategoryStyleColor:                  string;
    BLineBreakColor:                      string;
    BSaveBtnColor:                        string;
    BCategoryStyle:                       string;
    BAnimation:                           string;
    BContinueColor:                       string;
    PCContinueColor:                      string;
    PCFooterLogoUrl:                      string;
    PCFooterCookieProLogoUrl:             null;
    BFocusBorderColor:                    string;
    PCFocusBorderColor:                   string;
    TemplateName:                         string;
    GeoRuleGroupName:                     string;
    GeoRuleName:                          string;
}

export interface ConsentIntegration {
    ConsentApi:         string;
    RequestInformation: string;
}

export interface DomainData {
    pclifeSpanYr:                              string;
    pclifeSpanYrs:                             string;
    pclifeSpanSecs:                            string;
    pclifeSpanWk:                              string;
    pclifeSpanWks:                             string;
    pccontinueWithoutAcceptText:               string;
    pccloseButtonType:                         string;
    cctId:                                     string;
    MainText:                                  string;
    MainInfoText:                              string;
    AboutText:                                 string;
    AboutCookiesText:                          string;
    ConfirmText:                               string;
    AllowAllText:                              string;
    CookiesUsedText:                           string;
    AboutLink:                                 string;
    HideToolbarCookieList:                     boolean;
    ActiveText:                                string;
    AlwaysActiveText:                          string;
    AlertNoticeText:                           string;
    AlertCloseText:                            string;
    AlertMoreInfoText:                         string;
    CookieSettingButtonText:                   string;
    AlertAllowCookiesText:                     string;
    CloseShouldAcceptAllCookies:               boolean;
    LastReconsentDate:                         number;
    BannerTitle:                               string;
    ForceConsent:                              boolean;
    BannerPushesDownPage:                      boolean;
    InactiveText:                              string;
    CookiesText:                               string;
    CategoriesText:                            string;
    IsLifespanEnabled:                         boolean;
    LifespanText:                              string;
    VendorLevelOptOut:                         boolean;
    HasScriptArchive:                          boolean;
    BannerPosition:                            string;
    PreferenceCenterPosition:                  string;
    PreferenceCenterConfirmText:               string;
    VendorListText:                            string;
    ThirdPartyCookieListText:                  string;
    PreferenceCenterManagePreferencesText:     string;
    PreferenceCenterMoreInfoScreenReader:      string;
    CookieListTitle:                           string;
    CookieListDescription:                     string;
    Groups:                                    Group[];
    Language:                                  Language;
    ShowPreferenceCenterCloseButton:           boolean;
    FooterDescriptionText:                     string;
    CustomJs:                                  string;
    LifespanTypeText:                          string;
    LifespanDurationText:                      string;
    CloseText:                                 string;
    BannerCloseButtonText:                     string;
    AddLinksToCookiepedia:                     boolean;
    showBannerCloseButton:                     boolean;
    AlertLayout:                               string;
    IsDntEnable:                               boolean;
    ShowAlertNotice:                           boolean;
    IsConsentLoggingEnabled:                   boolean;
    IsIabEnabled:                              boolean;
    IsIabThirdPartyCookieEnabled:              boolean;
    ScrollCloseBanner:                         boolean;
    OnClickCloseBanner:                        boolean;
    NextPageCloseBanner:                       boolean;
    AcceptAllCookies:                          boolean;
    ConsentModel:                              string;
    VendorConsentModel:                        string;
    Vendors:                                   number[];
    OverriddenVendors:                         { [key: string]: OverriddenVendor };
    OverridenGoogleVendors:                    null;
    publisher:                                 Publisher;
    ScrollAcceptAllCookies:                    boolean;
    OnClickAcceptAllCookies:                   boolean;
    NextPageAcceptAllCookies:                  boolean;
    CookieListEnabled:                         boolean;
    Flat:                                      boolean;
    FloatingFlat:                              boolean;
    FloatingRoundedCorner:                     boolean;
    FloatingRoundedIcon:                       boolean;
    FloatingRounded:                           boolean;
    CenterRounded:                             boolean;
    Center:                                    boolean;
    Panel:                                     boolean;
    Popup:                                     boolean;
    List:                                      boolean;
    Tab:                                       boolean;
    ChoicesBanner:                             boolean;
    NoBanner:                                  boolean;
    BannerIABPartnersLink:                     string;
    BannerPurposeTitle:                        string;
    BannerPurposeDescription:                  string;
    BannerFeatureTitle:                        string;
    BannerFeatureDescription:                  string;
    BannerInformationTitle:                    string;
    BannerInformationDescription:              string;
    BannerShowRejectAllButton:                 boolean;
    BannerRejectAllButtonText:                 string;
    PCenterShowRejectAllButton:                boolean;
    PCenterRejectAllButtonText:                string;
    BannerSettingsButtonDisplayLink:           boolean;
    BannerDPDTitle:                            string;
    BannerDPDDescription:                      string[];
    BannerDPDDescriptionFormat:                string;
    PCFirstPartyCookieListText:                string;
    PCViewCookiesText:                         string;
    PCenterBackText:                           string;
    PCenterVendorsListText:                    string;
    PCenterViewPrivacyPolicyText:              string;
    PCenterClearFiltersText:                   string;
    PCenterApplyFiltersText:                   string;
    PCenterAllowAllConsentText:                string;
    PCenterCookiesListText:                    string;
    PCenterCancelFiltersText:                  string;
    PCenterEnableAccordion:                    boolean;
    IabType:                                   string;
    AdvancedAnalyticsCategory:                 string;
    PCGrpDescType:                             string;
    PCGrpDescLinkPosition:                     string;
    PCVendorFullLegalText:                     string;
    LegIntSettings:                            LegIntSettings;
    PCAccordionStyle:                          string;
    PCShowConsentLabels:                       boolean;
    PCActiveText:                              string;
    PCInactiveText:                            string;
    BannerAdditionalDescription:               string;
    BannerAdditionalDescPlacement:             string;
    PCenterSelectAllVendorsText:               string;
    PCenterFilterText:                         string;
    ReconsentFrequencyDays:                    number;
    UseGoogleVendors:                          boolean;
    PCIABVendorsText:                          string;
    PCGoogleVendorsText:                       string;
    PCTemplateUpgrade:                         boolean;
    PCShowPersistentCookiesHoverButton:        boolean;
    GlobalRestrictionEnabled:                  boolean;
    GlobalRestrictions:                        GlobalRestrictions;
    PCenterUseGeneralVendorsToggle:            boolean;
    PCenterGeneralVendorsText:                 string;
    PCenterAllowVendorOptout:                  boolean;
    PCenterGeneralVendorThirdPartyCookiesText: string;
    GeneralVendors:                            any[];
    BannerNonIABVendorListText:                string;
    PCenterVendorListLifespan:                 string;
    PCenterVendorListDisclosure:               string;
    PCenterVendorListNonCookieUsage:           string;
    PCenterVendorListDescText:                 string;
    PCenterVendorListStorageIdentifier:        string;
    PCenterVendorListStorageType:              string;
    PCenterVendorListStoragePurposes:          string;
    PCenterVendorListStorageDomain:            string;
    PCenterVendorListLifespanDay:              string;
    PCenterVendorListLifespanDays:             string;
    PCenterVendorListLifespanMonth:            string;
    PCenterVendorListLifespanMonths:           string;
    PCLifeSpanYr:                              string;
    PCLifeSpanYrs:                             string;
    PCLifeSpanSecs:                            string;
    PCLifeSpanWk:                              string;
    PCLifeSpanWks:                             string;
    PCCookiePolicyText:                        string;
    BShowSaveBtn:                              boolean;
    BSaveBtnText:                              string;
    CookieFirstPartyText:                      string;
    CookieThirdPartyText:                      string;
    PCCookiePolicyLinkScreenReader:            string;
    PCLogoScreenReader:                        string;
    PublisherCC:                               string;
    BCloseButtonType:                          string;
    BContinueText:                             string;
    PCCloseButtonType:                         string;
    PCContinueText:                            string;
    BannerFocus:                               boolean;
    BannerRelativeFontSizesToggle:             boolean;
    PCAllowToggleLbl:                          string;
    GCEnable:                                  boolean;
    GCAnalyticsStorage:                        string;
    GCAdStorage:                               string;
    GCRedactEnable:                            boolean;
    GCWaitTime:                                number;
    PCGeneralVendorsPolicyText:                string;
    PCOpensCookiesDetailsAlert:                string;
    PCOpensVendorDetailsAlert:                 string;
    AriaOpenPreferences:                       string;
    AriaClosePreferences:                      string;
    AriaPrivacy:                               string;
    BCookiePolicyLinkScreenReader:             string;
    BNoCursorFocus:                            boolean;
    BShowPolicyLink:                           boolean;
    PCenterVendorListSearch:                   string;
    PCenterCookieListSearch:                   string;
    PCenterLegitInterestText:                  string;
    PCenterLegIntColumnHeader:                 string;
    PCenterConsentText:                        string;
    PCenterVendorListFilterAria:               string;
    PCenterCookieListFilterAria:               string;
    BInitialFocus:                             boolean;
    BInitialFocusLinkAndButton:                boolean;
    NewVendorsInactiveEnabled:                 boolean;
    PCenterFilterAppliedAria:                  string;
    PCenterFilterClearedAria:                  string;
}

export interface GlobalRestrictions {
}

export interface Group {
    ShowInPopup:             boolean;
    ShowInPopupNonIAB:       boolean;
    Order:                   string;
    OptanonGroupId:          string;
    Parent:                  string;
    ShowSubgroup:            boolean;
    ShowSubGroupDescription: boolean;
    ShowSubgroupToggle:      boolean;
    GroupDescription:        string;
    GroupDescriptionOTT:     string;
    GroupNameMobile:         string;
    GroupNameOTT:            string;
    GroupName:               string;
    IsIabPurpose:            boolean;
    GeneralVendorsIds:       any[];
    FirstPartyCookies:       Cooky[];
    Hosts:                   Host[];
    PurposeId:               string;
    CustomGroupId:           string;
    GroupId:                 string;
    Status:                  Status;
    IsDntEnabled:            boolean;
    Type:                    Type;
    DescriptionLegal:        string;
    HasLegIntOptOut:         boolean;
    HasConsentOptOut:        boolean;
    IsGpcEnabled:            boolean;
}

export interface Cooky {
    thirdPartyDescription: null | string;
    patternKey:            null | string;
    thirdPartyKey:         null | string;
    firstPartyKey:         null | string;
    id:                    string;
    Name:                  string;
    Host:                  string;
    IsSession:             boolean;
    Length:                string;
    description:           string;
    DurationType:          number;
    category:              null;
    isThirdParty:          boolean;
}

export interface Host {
    HostName:      string;
    DisplayName:   string;
    HostId:        string;
    Description:   string;
    PrivacyPolicy: string;
    Cookies:       Cooky[];
}

export enum Status {
    AlwaysActive = "always active",
    Inactive = "inactive",
}

export enum Type {
    Cookie = "COOKIE",
    Iab2Feature = "IAB2_FEATURE",
    Iab2Purpose = "IAB2_PURPOSE",
    Iab2SplFeature = "IAB2_SPL_FEATURE",
    Iab2SplPurpose = "IAB2_SPL_PURPOSE",
}

export interface Language {
    Culture: string;
}

export interface LegIntSettings {
    PShowLegIntBtn:        boolean;
    PObjectLegIntText:     string;
    PObjectionAppliedText: string;
    PRemoveObjectionText:  string;
    PAllowLI:              boolean;
}

export interface OverriddenVendor {
    active:       boolean;
    legInt:       boolean;
    consent:      boolean;
    disabledCP?:  number[];
    disabledSF?:  number[];
    disabledLIP?: number[];
}

export interface Publisher {
    restrictions: { [key: string]: { [key: string]: number } };
}

export interface NtfyConfig {
    ShowNtfy:     boolean;
    NtfyDuration: number;
    ShowCS:       boolean;
    CSType:       string;
    CSTxt:        string;
    Sync:         Complete;
    Complete:     Complete;
    CSButton:     CSButton;
    CSLink:       CSLink;
}

export interface CSButton {
    Color:    string;
    BgColor:  string;
    BdrColor: string;
    Align:    string;
}

export interface CSLink {
    Color: string;
    Align: string;
}

export interface Complete {
    Title:       string;
    TitleAlign:  string;
    TitleColor:  string;
    Desc:        string;
    DescAlign:   string;
    DescColor:   string;
    BgColor:     string;
    BdrColor:    string;
    IconBgColor: string;
    ShowClose:   boolean;
    CloseAria:   string;
    ShowIcon:    boolean;
}
