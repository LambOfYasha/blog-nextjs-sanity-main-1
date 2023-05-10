
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Page extends Base {
    [x: string]: TypedObject;
    title: string;
    mainImage: {
        asset: {url: string};
    };
    body: [object];
}

interface Character extends Base {
    [x: string]: TypedObject;
    title: string;
    mainImage: {
        asset: {url: string};
    };
    body: [object];
}

interface Post extends Base {
    [x: string]: TypedObject;
    title: string;
    author: {
        [x: string]: any;
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {url: string};
    };
    slug: {current: string;};
    body: [object];
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "Image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}