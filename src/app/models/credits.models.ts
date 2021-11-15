export interface Credits {
  name: string;
  url: string;
  enabled: boolean;
}

export interface ImageCredits extends Credits {
  source: string;
}

export interface SoftwareCredits extends Credits {
  type: string;
}
