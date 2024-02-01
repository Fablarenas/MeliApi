export interface ProductListDto {
    site_id: string
    country_default_time_zone: string
    query: string
    paging: Paging
    results: Result[]
    sort: Sort
    available_sorts: AvailableSort[]
    filters: any[]
    available_filters: AvailableFilter[]
    pdp_tracking: PdpTracking
  }
  
  export interface Paging {
    total: number
    primary_results: number
    offset: number
    limit: number
  }
  
  export interface Result {
    id: string
    title: string
    condition: string
    thumbnail_id: string
    catalog_product_id?: string
    listing_type_id: string
    permalink: string
    buying_mode: string
    site_id: string
    category_id: string
    domain_id: string
    thumbnail: string
    currency_id: string
    order_backend: number
    price: number
    original_price?: number
    sale_price: any
    available_quantity: number
    official_store_id?: number
    official_store_name?: string
    use_thumbnail_id: boolean
    accepts_mercadopago: boolean
    shipping: Shipping
    stop_time: string
    seller: Seller
    attributes: Attribute[]
    installments?: Installments
    winner_item_id: any
    catalog_listing: boolean
    discounts: any
    promotions: any[]
    inventory_id?: string
    variation_filters?: string[]
    variations_data?: VariationsData
    differential_pricing?: DifferentialPricing
  }
  
  export interface Shipping {
    store_pick_up: boolean
    free_shipping: boolean
    logistic_type: string
    mode: string
    tags: string[]
    benefits: any
    promise: any
  }
  
  export interface Seller {
    id: number
    nickname: string
  }
  
  export interface Attribute {
    id: string
    name: string
    value_id?: string
    value_name?: string
    attribute_group_id: string
    attribute_group_name: string
    value_struct?: ValueStruct
    values: Value[]
    source: number
    value_type: string
  }
  
  export interface ValueStruct {
    number: number
    unit: string
  }
  
  export interface Value {
    id?: string
    name?: string
    struct?: Struct
    source: number
  }
  
  export interface Struct {
    unit: string
    number: number
  }
  
  export interface Installments {
    quantity: number
    amount: number
    rate: number
    currency_id: string
  }
  
  export interface VariationsData {
    "54798761141"?: N54798761141
    "61021021346"?: N61021021346
    "89128480846"?: N89128480846
    "89128480849"?: N89128480849
    "89128480852"?: N89128480852
    "174193353078"?: N174193353078
    "61025859735"?: N61025859735
    "61025859740"?: N61025859740
    "61025859727"?: N61025859727
    "61026168858"?: N61026168858
    "61026168873"?: N61026168873
    "61026168887"?: N61026168887
    "88814138416"?: N88814138416
    "88814138420"?: N88814138420
    "88814138423"?: N88814138423
    "89128514367"?: N89128514367
    "89128514373"?: N89128514373
    "181530832597"?: N181530832597
    "175091491136"?: N175091491136
    "175091491137"?: N175091491137
    "174098176387"?: N174098176387
    "175091491133"?: N175091491133
    "174193282776"?: N174193282776
    "174193282777"?: N174193282777
    "174193282778"?: N174193282778
    "88807986797"?: N88807986797
    "88807986804"?: N88807986804
    "174193282775"?: N174193282775
    "88808206713"?: N88808206713
    "88808206773"?: N88808206773
    "88808206792"?: N88808206792
    "82769687541"?: N82769687541
    "173648950933"?: N173648950933
    "179565177632"?: N179565177632
    "66904052018"?: N66904052018
    "174585745551"?: N174585745551
    "174585745549"?: N174585745549
    "174585745550"?: N174585745550
    "178201736711"?: N178201736711
  }
  
  export interface N54798761141 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N61021021346 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N89128480846 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N89128480849 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N89128480852 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N174193353078 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N61025859735 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N61025859740 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N61025859727 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N61026168858 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N61026168873 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N61026168887 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N88814138416 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N88814138420 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N88814138423 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N89128514367 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N89128514373 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N181530832597 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N175091491136 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N175091491137 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N174098176387 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N175091491133 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N174193282776 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N174193282777 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N174193282778 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N88807986797 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N88807986804 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N174193282775 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N88808206713 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N88808206773 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N88808206792 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N82769687541 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N173648950933 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N179565177632 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface N66904052018 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    inventory_id: string
  }
  
  export interface N174585745551 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N174585745549 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N174585745550 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
    user_product_id: string
  }
  
  export interface N178201736711 {
    thumbnail: string
    ratio: string
    name: string
    pictures_qty: number
  }
  
  export interface DifferentialPricing {
    id: number
  }
  
  export interface Sort {
    id: string
    name: string
  }
  
  export interface AvailableSort {
    id: string
    name: string
  }
  
  export interface AvailableFilter {
    id: string
    name: string
    type: string
    values: Value2[]
  }
  
  export interface Value2 {
    id: string
    name: string
    results: number
  }
  
  export interface PdpTracking {
    group: boolean
    product_info: ProductInfo[]
  }
  
  export interface ProductInfo {
    id: string
    score: number
    status: string
  }
  