export interface PostPreviewEntry {
    getIn: (data: string[]) => any;
}

export interface PreviewProps {
    entry: PostPreviewEntry;
    getAsset: (url: string) => any;
    widgetFor: (widget: string) => any;
}