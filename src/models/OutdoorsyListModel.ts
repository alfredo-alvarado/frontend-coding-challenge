interface ActiveOptions {
    cancel_policy: string;
    date: string;
    instant_book: boolean;
    minimum_days: number;
    price_per_day: number;
    price_per_month: number;
    price_per_week: number;
    tax: number;
    use_day_pricing: boolean;
    use_tax_inclusive_pricing: boolean;
}

interface Features {
    air_conditioner: boolean;
    audio_inputs: boolean;
    awning: boolean;
    backup_camera: boolean;
    beds_full?: number;
    beds_king?: number;
    beds_queen?: number;
    beds_twin?: number;
    bike_rack: boolean;
    burning_man_friendly: boolean;
    cd_player: boolean;
    ceiling_fan: boolean;
    dining_table: boolean;
    extra_storage: boolean;
    fuel_tank?: number;
    fuel_type: string;
    generator: boolean;
    gray_tank?: number;
    handicap_accessible: boolean;
    heater: boolean;
    hitch_weight?: number;
    hot_water_tank: boolean;
    inside_shower: boolean;
    international_travel_allowed: boolean;
    inverter: boolean;
    kitchen_sink: boolean;
    leveling_jacks: boolean;
    microwave: boolean;
    minimum_age?: number;
    mpg?: number;
    one_way_rentals: boolean;
    outside_shower: boolean;
    oven: boolean;
    pet_friendly: boolean;
    propane_tank?: number;
    radio: boolean;
    refrigerator: boolean;
    satellite: boolean;
    sewage_tank?: number;
    skylight: boolean;
    slide_outs?: number;
    smoking_allowed: boolean;
    solar: boolean;
    stove: boolean;
    tailgate_friendly: boolean;
    toilet: boolean;
    tow_hitch: boolean;
    trailer_weight?: number;
    transmission: string;
    tv_dvd: boolean;
    washer_dryer: boolean;
    water_tank?: number;
    wifi: boolean;
}

interface InsurancePlan {
    id: number;
    label: string;
    renter_body: string;
    renter_headline: string;
}

interface Locale {
    base_currency: string;
    distance_unit: string;
    length_unit: string;
    liquid_unit: string;
    weight_unit: string;
}

interface Location {
    city: string;
    country: string;
    county: string;
    lat: number;
    lng: number;
    state: string;
    zip: string;
}

interface PreferredPrimaryImage {
    amenity?: any;
    best: boolean;
    category?: any;
    description: string;
    position: number;
    primary: boolean;
    rental_id: number;
    review?: any;
    skip_enhance: boolean;
    tags: string;
    url: string;
    video: boolean;
}

interface Tag {
    count: number;
    slug: string;
    tag: string;
}

interface TaxRate {
    id: number;
    rate: number;
}

interface Attributes {
    active_options: ActiveOptions;
    availability_set: boolean;
    cancel_policy: string;
    cancel_text: string;
    children_count: number;
    coachnet_ready: boolean;
    coachnet_required: boolean;
    created: Date;
    current_location_id: number;
    custom_insurance_text: string;
    dealer: boolean;
    delivery: boolean;
    delivery_radius: number;
    delivery_usage_item_id: number;
    deposit_percentage: number;
    description: string;
    description_included: string;
    description_other: string;
    description_recommendations: string;
    display_vehicle_type: string;
    external: boolean;
    favorite: boolean;
    favorite_count: number;
    features: Features;
    generator_usage_item_id: number;
    group_on_map: boolean;
    group_reviews_num: number;
    group_reviews_score: number;
    group_score: number;
    has_been_published: boolean;
    hidden: boolean;
    house_rules: string;
    instant_book: boolean;
    instant_book_leeway: number;
    insurance_coverage: string;
    insurance_eligible: boolean;
    insurance_plan: InsurancePlan;
    insurance_renter_adjustable: boolean;
    insurance_state: string;
    last_published: Date;
    locale: Locale;
    location: Location;
    mileage_usage_item_id: number;
    minimum_days: number;
    minimum_deposit: number;
    name: string;
    nearby_content: any[];
    original_url: string;
    owner_score: number;
    parent_id: number;
    position: number;
    preferred_primary_image: PreferredPrimaryImage;
    presentment_currency: string;
    price_per_day: number;
    price_per_month: number;
    price_per_week: number;
    primary_image_url: string;
    pro: boolean;
    published: boolean;
    rental_score: number;
    reviews_num: number;
    score: number;
    seatbelts: number;
    security_deposit: number;
    settlement_currency: string;
    sleeps: number;
    sleeps_adults: number;
    sleeps_kids: number;
    slug: string;
    smart_photo_score: number;
    sort_score: number;
    summary: string;
    tags: Tag[];
    tax_rates: TaxRate[];
    type: string;
    unavailable: boolean;
    updated: Date;
    use_day_pricing: boolean;
    use_tax_inclusive_pricing: boolean;
    user_slug: string;
    vehicle_amps: number;
    vehicle_box_length: number;
    vehicle_class: string;
    vehicle_dry_weight: number;
    vehicle_gvwr: number;
    vehicle_height: number;
    vehicle_length: number;
    vehicle_length_with_hitch: number;
    vehicle_make: string;
    vehicle_model: string;
    vehicle_width: number;
    vehicle_year: number;
}

interface Datum2 {
    id: string;
    type: string;
}

interface Images {
    data: Datum2[];
}

interface Data {
    id: string;
    type: string;
}

interface MileageUsageItem {
    data: Data;
}

interface Data2 {
    id: string;
    type: string;
}

interface Owner {
    data: Data2;
}

interface Data3 {
    id: string;
    type: string;
}

interface PrimaryImage {
    data: Data3;
}

interface Data4 {
    id: string;
    type: string;
}

interface GeneratorUsageItem {
    data: Data4;
}

interface Relationships {
    images: Images;
    mileage_usage_item: MileageUsageItem;
    owner: Owner;
    primary_image: PrimaryImage;
    generator_usage_item: GeneratorUsageItem;
}

interface Datum {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationships;
}

interface Category {
    Name: string;
    Slug: string;
}

interface Attributes2 {
    amenity?: any;
    best: boolean;
    category: Category;
    description: string;
    position: number;
    primary: boolean;
    rental_id: number;
    review?: any;
    skip_enhance: boolean;
    tags: string;
    url: string;
    video: boolean;
}

interface Included {
    id: string;
    type: string;
    attributes: Attributes2;
}

interface PriceHistogram {
    data: number[];
    max_value: number;
}

interface Experiments {
}

interface Meta {
    radius: number;
    lat: number;
    lng: number;
    city: string;
    county: string;
    state: string;
    country: string;
    country_code: string;
    country_name: string;
    total: number;
    start_position: number;
    stop_position: number;
    price_max: number;
    price_min: number;
    price_average: number;
    price_histogram: PriceHistogram;
    vehicle_types: any[];
    locale: string;
    experiments: Experiments;
}

export interface OutdoorsyListResponse {
    data: Datum[];
    included: Included[];
    meta: Meta;
}