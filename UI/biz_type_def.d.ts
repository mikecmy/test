/**
 * 添加购物车
 */
export interface AddCartRequest {
    /**
     * 商品id
     */
    goodsId?: number; // int64
    /**
     * 下单的商品数量
     */
    quantity?: number; // int32
}
/**
 * 添加商品到收藏夹请求
 */
export interface AddGoodsToFavoriteRequest {
    /**
     * 商品ID
     */
    GoodsIds?: number /* int64 */ [];
}
export interface AddressCreateRequest {
    /**
     * 收件人姓名
     */
    name: string;
    /**
     * 联系电话
     */
    contactPhone?: string;
    /**
     * 地址别名
     */
    addressName?: string;
    /**
     * 收件人电话
     */
    phone: string;
    /**
     * 所在地区：省Id
     */
    provinceCode: string;
    /**
     * 所在地区：城市Id
     */
    cityCode: string;
    /**
     * 所在地区：区域ID
     */
    districtCode: string;
    /**
     * 所在地区：地址
     */
    detail: string;
    /**
     * 是否默认值
     */
    isDefault: boolean;
}
export interface AddressGetAddressResponse {
    /**
     * 收货地址ID
     */
    id?: number; // int64
    /**
     * 收件人姓名
     */
    name?: string;
    /**
     * 收件人电话
     */
    phone?: string;
    /**
     * 所在地区：省Code
     */
    Province?: CityData;
    /**
     * 所在地区：城市Code
     */
    City?: CityData;
    /**
     * 所在地区：区域Code
     */
    District?: CityData;
    /**
     * 所在地区：地址
     */
    detail?: string;
    /**
     * 是否默认值
     */
    isDefault?: boolean;
}
export interface AddressResponse {
    /**
     * 配送地址Id
     */
    Id?: number; // int64
    /**
     * 收件人姓名
     */
    name?: string;
    /**
     * 联系电话
     */
    contactPhone?: string;
    /**
     * 地址别名
     */
    addressName?: string;
    /**
     * 收件人电话
     */
    phone?: string;
    /**
     * 所在地区：省Code
     */
    province?: NamedItem;
    /**
     * 所在地区：城市Code
     */
    city?: NamedItem;
    /**
     * 所在地区：区域Code
     */
    district?: NamedItem;
    /**
     * 所在地区：地址
     */
    detail?: string;
    /**
     * 是否默认值
     */
    isDefault?: boolean;
}
/**
 * 树级结构地址
 */
export interface AddressTreeResponse {
    /**
     * 编号
     */
    Code?: string;
    /**
     * 名字
     */
    Name?: string;
    /**
     * 拼音首字母
     */
    PinyinSimple?: string;
    /**
     * 拼音
     */
    PinyinFull?: string;
    /**
     * 下级
     */
    SubRegionList?: AddressTreeResponse[];
}
export interface AddressUpdateRequest {
    /**
     * 地址编号
     */
    id: number; // int64
    /**
     * 收件人姓名
     */
    name: string;
    /**
     * 收件人电话
     */
    phone: string;
    /**
     * 联系电话
     */
    contactPhone?: string;
    /**
     * 地址别名
     */
    addressName?: string;
    /**
     * 所在地区：省Id
     */
    provinceCode: string;
    /**
     * 所在地区：城市Id
     */
    cityCode: string;
    /**
     * 所在地区：区域ID
     */
    districtCode: number; // int32
    /**
     * 所在地区：地址
     */
    detail?: string;
    /**
     * 所在地区：是否默认值
     */
    isDefault: boolean;
}
/**
 * 返回banner图片模型
 */
export interface AdvertisemenSearchResponse {
    /**
     * 广告标题
     */
    Title?: string;
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    Type?: string;
    /**
     * 连接地址
     */
    LinkUrl?: string;
    /**
     * 广告模块链接名称
     */
    Module?: string;
}
/**
 * 查询广告带人参数
 */
export interface BannerRequest {
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    Type?: number; // int32
    /**
     * 页面类型key，前端维护
     */
    PageTypeKey?: number; // int32
    /**
     * 页面位置key
     */
    PositionKey?: number; // int32
    /**
     * 子集分类id
     */
    DisplayCategoryId?: string;
}
/**
 * BannerResponse
 */
export interface BannerResponse {
    /**
     * 雪花Id
     */
    id?: number; // int64
    /**
     * 所属平台（1、pc，2、app）
     */
    platform?: number; // int32
    /**
     * 广告标题
     */
    title?: string;
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    type?: number; // int32
    /**
     * 页面类型名字
     */
    pageTypeId?: number; // int64
    /**
     * 位置名字
     */
    positionId?: number; // int64
    /**
     * 排序字段（越小越前）
     */
    sort?: number; // int32
    /**
     * 广告模块链接名称
     */
    module?: string;
    /**
     * 图片地址们
     */
    imgs?: string;
    /**
     * 宽度
     */
    width?: number; // double
    /**
     * 高度
     */
    height?: number; // double
    /**
     * 开始时间
     */
    beginTime?: string; // date-time
    /**
     * 广告结束时间
     */
    endTime?: string; // date-time
    /**
     * 是否有效
     */
    enabled?: boolean;
    /**
     * 页面类型名字
     */
    pageTypeName?: string;
    /**
     * 位置名字
     */
    positionName?: string;
    /**
     * 广告类型名称
     */
    typeName?: string;
    /**
     * 所属平台名称
     */
    platformName?: string;
    /**
     * 连接地址
     */
    LinkUrl?: string;
}
/**
 * banner类型模型
 */
export interface BannerSearchRequest {
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    Type?: number; // int32
    /**
     * 页面类型key，前端维护
     */
    PageTypeKey?: number; // int32
    /**
     * 页面位置key
     */
    PositionKey?: number; // int32
    /**
     * 子类型ID没有时不传
     */
    DisplayCategoryId?: string;
}
export interface BrandDto {
    id?: number; // int64
    name?: string;
}
/**
 * 查询购物车
 */
export interface CartResponse {
    /**
     * id
     */
    goodsId?: number; // int64
    /**
     * 商品图片
     */
    goodsImage?: string;
    /**
     * 商品名称
     */
    goodsName?: string;
    /**
     * 商品现价
     */
    goodsCurrentPrice?: number; // double
    /**
     * 商品未变更之前的原价
     */
    goodsOriginalPrice?: number; // double
    /**
     * 限购数量
     */
    goodsLimit?: number; // int32
    /**
     * 每单下限
     */
    minLimit?: number; // int32
    /**
     * 增量个数
     */
    increment?: number; // int32
    /**
     * 下单的商品数量
     */
    goodsQuantity?: number; // int32
    /**
     * 产品状态
     */
    goodsStatus?: number; // int32
    /**
     * 商品描述
     */
    description?: string;
    /**
     * 是否删除
     */
    isDeleted?: boolean;
    /**
     * 标签
     */
    Tag?: number; // int32
    /**
     * 限时抢购剩余时间
     */
    RemainingTime?: number; // int32
    /**
     * 价格变更备注
     */
    PriceRemark?: string;
}
/**
 * 分类
 */
export interface Category {
    /**
     * 分类名称
     */
    name?: string;
    /**
     * 分类code
     */
    code?: string;
    /**
     * 导航icon
     */
    icon?: string;
    /**
     * 子分类
     */
    subCategories?: Category[];
}
export interface CategoryAndTitle {
    Id?: number; // int64
    /**
     * 分类和详情标题
     */
    Name?: string;
    /**
     * 帮助中心简写类
     */
    centers?: HelpCenterShort[];
}
/**
 * 更新手機號
 */
export interface ChangePhoneNumberRequest {
    /**
     * 手机号
     */
    newPhoneNumber: string;
    /**
     * 驗證碼
     */
    verifyCode: number; // int32
}
export interface CheckoutCartRequest {
    /**
     * 购买商品
     */
    goods?: GoodsRequest[];
    /**
     * 平台
     */
    platformType?: number; // int32
}
export interface CheckoutCartResponse {
    /**
     * 运费
     */
    shippingFee?: number; // double
    /**
     * 商品总数
     */
    goodsTotalCount?: number; // int64
    /**
     * 商品总价
     */
    goodsTotalPrice?: number; // double
    /**
     * 收获地址
     */
    Address?: AddressGetAddressResponse[];
    /**
     * 购买商品
     */
    Goods?: GoodsResponse[];
    /**
     * 返回信息
     */
    ResultMessage?: OrderResultMessage[];
}
export interface CityData {
    Code?: string;
    Name?: string;
}
/**
 * 确认支付
 */
export interface ConfirmRequestDTO {
    /**
     * 主订单的编号
     */
    Sn?: string;
    /**
     * 支付方式 1 微信 2 支付宝 3 智慧生活卡 4 PC微信 5 PC支付宝 6PC智慧生活卡
     */
    PaymentType?: number; // int32
    /**
     * 账号
     */
    Account?: string;
    /**
     * 密码
     */
    PassWord?: string;
    /**
     * 验证码
     */
    Captcha?: string;
    /**
     * 验证码token
     */
    CodeToken?: string;
}
export interface CustomerFavoritesResposne {
    /**
     * 商品ID
     */
    id?: number; // int64
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 关键字
     */
    keywords?: string;
    /**
     * 简介
     */
    introduction?: string;
    /**
     * 封面图
     */
    imageCover?: string;
    /**
     * 商品单位
     */
    unit?: string;
    /**
     * 市场价
     */
    marketPrice?: number; // double
    /**
     * 销售价
     */
    salePrice?: number; // double
    /**
     * 手机专享价
     */
    phonePrice?: number; // double
    /**
     * 商品库存
     */
    stock?: number; // int64
    /**
     * 是否溯源
     */
    isTraceSource?: boolean;
    /**
     * 是否预售
     */
    isPresale?: boolean;
    /**
     * 预售时间
     */
    presaleTime?: string; // date-time
}
/**
 * 特色云南商品
 */
export interface FCGoods {
    /**
     * 产品Id
     */
    goodsId?: number; // int64
    /**
     * 产品图片
     */
    goodsImage?: string;
    /**
     * 产品名称
     */
    goodsName?: string;
    /**
     * 产品标签
     */
    tag?: string;
    /**
     * 产品描述（原desc）
     */
    description?: string;
    /**
     * 产品价格
     */
    goodsPrice?: number; // double
    /**
     * 产品原价
     */
    goodsPriceOriginal?: number; // double
    /**
     * 库存
     */
    stock?: number; // int32
    /**
     * 规格
     */
    spec?: string;
    /**
     * 价格单位
     */
    priceUnit?: string;
    /**
     * 免运费金额
     */
    shippingFreeLimit?: number; // double
}
/**
 * 云南特色Request
 */
export interface FeatureCityAdPostRequest {
    /**
     * 页面类型
     */
    PageType?: number; // int64
    /**
     * 页面位置
     */
    PagePostion?: number; // int64
}
/**
 * 云南特色商品列表请求
 */
export interface FeatureCityGoodsPostRequest {
    /**
     * 商品id
     */
    GoodId?: number; // int64
    /**
     * 所属平台（1、app 2、pc）
     */
    PlatformType?: number; // int32
    /**
     * 页面类型
     */
    PageTypeId?: number; // int64
    /**
     * 页面位置
     */
    PagePositionId?: number; // int64
    /**
     * 是否有效
     */
    Enable?: boolean;
    StartStartTime?: string; // date-time
    StartEndTime?: string; // date-time
    EndStartTime?: string; // date-time
    EndEndTime?: string; // date-time
}
/**
 * 特色云南response
 */
export interface FeaturedCityResponse {
    /**
     * 总数
     */
    total?: number; // int32
    /**
     * 图片们
     */
    images?: Image[];
}
/**
 * 意见反馈
 */
export interface FeedbackInput {
    /**
     * 用户建议
     */
    Content: string;
    /**
     * 联系方式
     */
    Phone: string;
    /**
     * 平台（PC-1，APP-2）
     */
    Platform?: number; // int32
}
export interface FlashSaleViewModel {
    /**
     * 雪花Id
     */
    id?: number; // int64
    /**
     * 商品Id
     */
    goodsId?: number; // int64
    /**
     * 抢购价格
     */
    price?: number; // double
    /**
     * 预留库存
     */
    obligateStock?: number; // int32
    /**
     * 每单限购数量
     */
    limitCount?: number; // int32
    /**
     * 商品图片
     */
    img?: string;
    /**
     * 开始时间
     */
    beginTime?: string; // date-time
    /**
     * 结束时间
     */
    endTime?: string; // date-time
    /**
     * 备注
     */
    remark?: string;
    /**
     * 状态（1、初始态，2、作废，3、待审核，4、审核不通过，5、就绪，6、运行中，7、终止，8、已完成）
     */
    status?: number; // int32
}
/**
 * 楼层查询Request
 */
export interface FloorRequest {
    /**
     * 页面类型Id
     */
    pageTypeKey?: number; // int32
    /**
     * 前台分类Id
     */
    displayCategoryId?: number; // int64
    /**
     * 县馆Id
     */
    featureMuseumId?: number; // int64
}
export interface GeneralAttributes {
    name?: string;
    value?: string;
}
/**
 * 溯源产品
 */
export interface GoodGetGoodsOriginResponse {
    Id?: number; // int64
    /**
     * 商品编码
     */
    GoodsSn?: string;
    /**
     * 商品名称
     */
    Name?: string;
    /**
     * 分类信息code
     */
    CategoryCode?: string;
    /**
     * 品牌
     */
    Brand?: number; // int32
    /**
     * 封面图
     */
    ImageCover?: string;
    /**
     * 商品状态（1、已创建  2、上架 3、下架  4、已作废 5、仅展示）
     */
    Status?: number; // int32
    /**
     * 关键字
     */
    Keywords?: string;
    /**
     * 商品类型（1、普通商品， 2、）
     */
    Type?: number; // int32
    /**
     * 描述
     */
    Description?: string;
    /**
     * 简介
     */
    Introduction?: string;
    /**
     * 市场价
     */
    MarketPrice?: number; // double
    /**
     * 销售价
     */
    SalePrice?: number; // double
    /**
     * 手机专享价
     */
    PhonePrice?: number; // double
    /**
     * 每单上限
     */
    MaxLimit?: number; // int32
    /**
     * 每单下限
     */
    MinLimit?: number; // int32
}
/**
 * 溯源产品（包括banner的数据结构）
 */
export interface GoodOriginResponseDTOGoodGetGoodsOriginResponse_ {
    /**
     * banner图片数组
     */
    banner?: OriginAdvertisemenResponse[];
    /**
     * 分页信息
     */
    paging?: PageResponse;
    /**
     * 溯源产品列表
     */
    itemList?: GoodGetGoodsOriginResponse[];
}
export interface GoodPostGoodsResponse {
    /**
     * 商品ID
     */
    id?: number; // int64
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 关键字
     */
    keywords?: string;
    /**
     * 分类信息code
     */
    categoryCode?: string;
    /**
     * 简介
     */
    introduction?: string;
    /**
     * 商品轮播图 (按顺序排序)
     */
    imagesCarousel?: string[];
    /**
     * 封面图
     */
    imageCover?: string;
    /**
     * 商品单位
     */
    unit?: string;
    /**
     * 市场价
     */
    marketPrice?: number; // double
    /**
     * 销售价
     */
    salePrice?: number; // double
    /**
     * 手机专享价
     */
    phonePrice?: number; // double
    /**
     * 商品库存
     */
    stock?: number; // int64
    /**
     * 是否溯源
     */
    isTraceSource?: boolean;
    /**
     * 是否预售
     */
    isPresale?: boolean;
    /**
     * 预售时间
     */
    presaleTime?: string; // date-time
}
/**
 * 产品
 */
export interface Goods {
    /**
     * 产品图片
     */
    ImageCover?: string;
    /**
     * 产品名称
     */
    Name?: string;
    /**
     * 简介
     */
    Introduction?: string;
    /**
     * 原产地省
     */
    OriginProvinceCode?: string;
    /**
     * 原产地市
     */
    OriginCityCode?: string;
    /**
     * 原产地区
     */
    OriginDistrictCode?: string;
    /**
     * 是否溯源
     */
    IsTraceSource?: boolean;
    /**
     * 单位值
     */
    UnitValue?: string;
    /**
     * 市场价
     */
    MarketPrice?: number; // double
    /**
     * 销售价
     */
    SalePrice?: number; // double
    /**
     * 手机专享价
     */
    PhonePrice?: number; // double
}
export interface GoodsCategoryAncestorsResponse {
    /**
     * 名称
     */
    Name?: string;
    /**
     * 类别Id
     */
    Code?: string;
    /**
     * 导航icon
     */
    Icon?: string;
}
export interface GoodsInfoBasic {
    /**
     * 商品ID
     */
    id?: number; // int64
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 分类信息code
     */
    categoryCode?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 简介
     */
    introduction?: string;
    /**
     * 增量个数
     */
    increment?: number; // int32
    /**
     * 每单上限
     */
    maxLimit?: number; // int32
    /**
     * 每单下限
     */
    minLimit?: number; // int32
    /**
     * 商品轮播图 (按顺序排序)
     */
    imagesCarousel?: string[];
    /**
     * 封面图
     */
    imageCover?: string;
    /**
     * 商品单位
     */
    unit?: string;
    /**
     * 市场价
     */
    marketPrice?: number; // double
    /**
     * 销售价
     */
    salePrice?: number; // double
    /**
     * 手机专享价
     */
    phonePrice?: number; // double
    /**
     * 商品库存
     */
    stock?: number; // int64
    /**
     * 包装清单
     */
    packageList?: string;
    /**
     * 注意事项
     */
    notice?: string;
    /**
     * 是否溯源
     */
    isTraceSource?: boolean;
    /**
     * 是否预售
     */
    isPresale?: boolean;
    /**
     * 预售时间
     */
    presaleTime?: string; // date-time
    promotion?: FlashSaleViewModel;
    /**
     * 属性
     */
    properties?: GeneralAttributes[];
    /**
     * 原产地区
     */
    originDistrictCode?: string;
}
/**
 * 产品
 */
export interface GoodsInfoOutput {
    /**
     * 下单的商品数量
     */
    quatity?: number; // int64
    /**
     * 商品ID
     */
    goodsid?: number; // int64
    /**
     * 商品图片url
     */
    goodsImage?: string;
    /**
     * 商品名称
     */
    goodsName?: string;
    /**
     * 商品描述
     */
    desc?: string;
    /**
     * 商品现有价格
     */
    goodsPrice?: number; // double
    /**
     * 商品原价
     */
    goodsPriceOriginal?: number; // double
    /**
     * 商品总价
     */
    totalPrice?: number; // double
}
export interface GoodsIsStored {
    /**
     * 是否收藏过
     */
    isCollected?: boolean;
}
/**
 * 产品级别
 */
export interface GoodsLevel {
    /**
     * 分类名称
     */
    name?: string;
    /**
     * 分类code
     */
    code?: string;
    /**
     * 导航icon
     */
    icon?: string;
}
/**
 * 品类Response
 */
export interface GoodsLevelResponse {
    /**
     * 品类集合
     */
    categories?: GoodsLevel[];
}
/**
 * 购实惠，购特产，都在买返回商品列表
 */
export interface GoodsRecommendSearchResponse {
    Id?: number; // int64
    /**
     * 商品id
     */
    GoodId?: number; // int64
    /**
     * 商品名称
     */
    GoodName?: string;
    /**
     * 商品图片URL
     */
    goodsImage?: string;
    /**
     * 商品描述
     */
    desc?: string;
    /**
     * 商品现有价格
     */
    goodsPrice?: number; // double
    /**
     * 商品原价
     */
    goodsPriceOriginal?: number; // double
    /**
     * 价格单位
     */
    priceUnit?: number; // double
}
export interface GoodsRequest {
    /**
     * 商品ID
     */
    goodsId?: number; // int64
    /**
     * 商品数量
     */
    goodsQuantity?: number; // int32
    /**
     * 是否是活动商品
     */
    IsActivity?: boolean;
}
export interface GoodsResponse {
    /**
     * 商品ID
     */
    goodsId?: number; // int64
    /**
     * 商品名称
     */
    goodsName?: string;
    /**
     * 商品描述
     */
    desc?: string;
    /**
     * 商品数量
     */
    goodsQuantity?: number; // int32
    /**
     * 销售价
     */
    salePrice?: number; // double
    /**
     * 每单上限
     */
    MaxLimit?: number; // int32
    /**
     * 每单下限
     */
    MinLimit?: number; // int32
    /**
     * 封面图
     */
    ImageCover?: string;
}
export interface GoodsSearchRequest {
    /**
     * 分类code
     */
    categoryCode?: string;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 品牌id
     */
    brandIds?: number /* int64 */ [];
    /**
     * 最低价
     */
    minPrice?: number; // double
    /**
     * 最高价
     */
    maxPrice?: number; // double
    /**
     * 销售区域
     */
    salesAreaCodes?: string[];
    /**
     * 重量
     */
    weights?: number /* double */ [];
}
export interface GoodsSearchResponse {
    /**
     * 商品
     */
    brands?: BrandDto[];
    /**
     * 价格区间
     */
    priceBounds?: string[];
    /**
     * 销售区域
     */
    salesAreas?: SalesAreaDto[];
    /**
     * 重量
     */
    weights?: number /* double */ [];
}
export interface HelpCenterDto {
    Id?: number; // int64
    /**
     * 标题
     */
    Title?: string;
    /**
     * 详情
     */
    Content?: string;
    /**
     * 帮助中心类别id
     */
    CategoryId?: number; // int64
    /**
     * 帮助中心类别名称
     */
    CategoryName?: string;
    /**
     * 是否页脚显示
     */
    IsShowFooter?: boolean;
    /**
     * 排序
     */
    Sort?: number; // int32
    /**
     * 状态（1、有效 0、无效）
     */
    Enabled?: boolean;
    /**
     * 所属平台(1、pc, 2、app)
     */
    Platform?: number; // int32
}
/**
 * 帮助中心response
 */
export interface HelpCenterResponse {
    /**
     * 标题
     */
    title?: string;
    /**
     * 内容
     */
    content?: string;
}
export interface HelpCenterShort {
    Id?: number; // int64
    /**
     * 名称
     */
    Title?: string;
    /**
     * 排序字段
     */
    Sort?: number; // int32
}
export interface HotKeyWordSearchResponse {
    Id?: number; // int64
    KeyWord?: string;
}
export interface HotSearchKeysResponse {
    /**
     * 关键字列表
     */
    recommendList?: string[];
}
/**
 * 图片
 */
export interface Image {
    /**
     * 路径
     */
    path?: string;
    /**
     * 广告模块名称
     */
    moduleType?: string;
    /**
     * 模块Id？？？？？取数据取的BannerLink
     */
    moduleId?: string;
    /**
     * 是否为一楼大图
     */
    isJumbotron?: string;
}
export interface ImgCapcha {
    /**
     * token
     */
    session?: string;
    /**
     * 图片的base64编码
     */
    img?: string;
}
export interface KeyWordSearchRequest {
    /**
     * 页面类型id
     */
    PageType?: number; // int64
    /**
     * 分类Id
     */
    DisplayCategoryCode?: string;
    /**
     * 一县一馆Id
     */
    FeatureMuseumId?: number; // int64
}
export interface KeyWordSearchResponse {
    Id?: number; // int64
    KeyWord?: string;
}
/**
 * 合并购物车
 */
export interface MergeCartRequest {
    /**
     * 商品id
     */
    goodsId?: number; // int64
    /**
     * 下单的商品数量
     */
    quantity?: number; // int32
}
/**
 * 修改密码request
 */
export interface ModifyPasswordRequest {
    /**
     * 旧密码
     */
    oldPassword: string;
    /**
     * 新密码
     */
    newPassword: string;
}
/**
 * 馆
 */
export interface Museum {
    /**
     * 编号
     */
    id?: number; // int64
    /**
     * 排序
     */
    sort?: number; // int32
    /**
     * 页面名称
     */
    title?: string;
    /**
     * 图片地址
     */
    imageURL?: string;
    /**
     * 促销语
     */
    PromotionTitle?: string;
    /**
     * 简介
     */
    Introduction?: string;
    /**
     * 标签列表
     */
    Tags?: Tag[];
}
/**
 * 馆详情
 */
export interface MuseumDetailResponse {
    /**
     * 商品ID
     */
    Id?: number; // int64
    /**
     * 产品图片
     */
    ImageCover?: string;
    /**
     * 产品名称
     */
    Name?: string;
    /**
     * 简介
     */
    Introduction?: string;
    /**
     * 原产地省
     */
    OriginProvinceCode?: string;
    /**
     * 原产地市
     */
    OriginCityCode?: string;
    /**
     * 原产地区
     */
    OriginDistrictCode?: string;
    /**
     * 是否溯源
     */
    IsTraceSource?: boolean;
    /**
     * 单位值
     */
    UnitValue?: string;
    /**
     * 市场价
     */
    MarketPrice?: number; // double
    /**
     * 销售价
     */
    SalePrice?: number; // double
    /**
     * 手机专享价
     */
    PhonePrice?: number; // double
    /**
     * 手机专享价
     */
    AvailableStock?: number; // int32
    /**
     * 销量
     */
    SalesVolume?: number; // int64
}
export interface NamedItem {
    /**
     * 地区Code
     */
    code?: string;
    /**
     * 名称
     */
    name?: string;
}
/**
 * 页面类型和页面位置查询商品列表和广告列表
 */
export interface NewGoodsDto {
    /**
     * 返回banner图片
     */
    AdvertisemenItem?: AdvertisemenSearchResponse[];
    /**
     * 产品列表
     */
    itemList?: PagingResponseGoodsRecommendSearchResponse_;
}
/**
 * 新闻公告详情
 */
export interface NewsResponse {
    /**
     * 标题
     */
    title?: string;
    /**
     * 详情
     */
    content?: string;
    /**
     * 类别（1、新闻 2、公告）
     */
    type?: number; // int32
    /**
     * 排序
     */
    sort?: number; // int32
    /**
     * 状态（1、有效 0、无效）
     */
    enabled?: boolean;
    /**
     * 开始时间
     */
    startTime?: string; // date-time
    /**
     * 结束时间
     */
    endTime?: string; // date-time
}
/**
 * 查询新闻公告
 */
export interface NewsSearchResponse {
    /**
     * 标题
     */
    title?: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 类别（1、新闻 2、公告）
     */
    type?: number; // int32
    /**
     * 排序
     */
    sort?: number; // int32
    /**
     * 状态（1、有效 0、无效）
     */
    enabled?: boolean;
    /**
     * 开始时间
     */
    startTime?: string; // date-time
    /**
     * 结束时间
     */
    endTime?: string; // date-time
    /**
     * 创建人Id
     */
    createUser?: number; // int64
}
/**
 * 订单详情
 */
export interface OrderAppInfo {
    /**
     * 主键
     */
    Id?: number; // int64
    /**
     * 主订单编号
     */
    Sn?: string;
    /**
     * 总价
     */
    TotalPrice?: number; // double
    /**
     * 运费
     */
    Freight?: number; // double
    /**
     * 创建时间
     */
    CreateTime?: string; // date-time
    /**
     * 子订单
     */
    order?: OrderGetOrdersResponse[];
}
/**
 * 订单详情
 */
export interface OrderDetailOutput {
    /**
     * 订单编号
     */
    Sn?: string;
    /**
     * 创建时间
     */
    CreateTime?: string; // date-time
    /**
     * 订单状态
     */
    OrderStatus?: string;
    /**
     * 运费
     */
    ShippingFee?: number; // double
    /**
     * 订单总金额
     */
    TotalPrice?: number; // double
    /**
     * 应付金额
     */
    OrderPayment?: number; // double
    /**
     * 物流公司
     */
    LogisticsCompany?: string;
    /**
     * 用户留言
     */
    UserMessage?: string;
    /**
     * 子订单
     */
    order?: OrderGetOrdersResponse[];
    /**
     * 收货地址
     */
    address?: OrderGetOrdersDetailResponseAddressInfo[];
}
export interface OrderGetOrdersDetailResponseAddressInfo {
    /**
     * 地址姓名
     */
    Phone?: string;
    /**
     * 收件人姓名
     */
    Name?: string;
    /**
     * 收件人手机号
     */
    Telephone?: string;
    /**
     * 详细地址
     */
    Detail?: string;
    /**
     * 省
     */
    Province?: string;
    /**
     * 市
     */
    City?: string;
    /**
     * 区
     */
    District?: string;
}
export interface OrderGetOrdersResponse {
    /**
     * 子订单id
     */
    OrderId?: number; // int64
    /**
     * 子订单编号
     */
    Sn?: string;
    /**
     * 订单组编号
     */
    OrderGroup?: string;
    /**
     * 订单状态
     */
    OrderStatus?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    /**
     * 子订单总金额
     */
    OrderTotalPrice?: number; // double
    /**
     * 运费
     */
    Freight?: number; // double
    /**
     * 商品列表
     */
    GoodsLists?: GoodsInfoOutput[];
}
export interface OrderPayOrdersDetailResponse {
    /**
     * 订单编号
     */
    Sn?: string;
    /**
     * 应付金额
     */
    OrderPayment?: number; // double
    /**
     * 收货地址
     */
    address?: OrderGetOrdersDetailResponseAddressInfo[];
    /**
     * 商品列表
     */
    GoodsLists?: GoodsInfoOutput[];
    /**
     * 支付方式
     */
    PaymentType?: PayTypeResponse[];
}
export interface OrderPostOrdersSubmitRequest {
    /**
     * 商品列表
     */
    goodsLists?: GoodsRequest[];
    /**
     * 收获地址
     */
    addressId?: number; // int64
    /**
     * 买家留言
     */
    userMessage?: string;
    /**
     * 平台1pc 2app
     */
    platformType?: number; // int32
    /**
     * 收货人姓名
     */
    receiveInfoName?: string;
    /**
     * 收货人联系方式
     */
    receiveInfoPhone?: string;
    /**
     * 收货人手机号
     */
    receiveInfoTelephone?: string;
    /**
     * 收货人详细地址
     */
    receiveInfoDetail?: string;
    /**
     * 省code
     */
    ProvinceCode?: string;
    /**
     * 市code
     */
    CityCode?: string;
    /**
     * 区code
     */
    DistrictCode?: string;
    /**
     * 发票类型 0，不开放票 1，普通发票 2 增值税发票
     */
    InvoiceType?: number; // int32
    /**
     * 发票抬头
     */
    InvoiceTitle?: string;
    /**
     * 发票内容
     */
    InvoiceContent?: string;
    /**
     * 应付金额
     */
    OrderPayment?: number; // double
}
export interface OrderResultMessage {
    /**
     * 提示方式 1,直接显示 2,用户选择
     */
    MessageType?: number; // int32
    /**
     * 提示信息
     */
    Message?: string;
}
/**
 * 溯源商品图片
 */
export interface OriginAdvertisemenResponse {
    /**
     * 广告标题
     */
    Title?: string;
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    Type?: string;
    /**
     * 连接地址
     */
    LinkUrl?: string;
    /**
     * 广告模块链接名称
     */
    Module?: string;
    /**
     * 图片地址们
     */
    Imgs?: string;
}
export interface PWDetail {
    /**
     * 名称
     */
    name?: string;
    /**
     * 联系电话
     */
    tel?: string;
    /**
     * 开始时间（等于之前的公开时间）
     */
    StartTime?: string; // date-time
    /**
     * 结束时间
     */
    EndeTime?: string; // date-time
    /**
     * 新闻内容
     */
    newsContent?: string;
}
export interface PageFloorDetail {
    /**
     * 楼层名称
     */
    title?: string;
    /**
     * 页面模板Id（需要和前端合作）
     */
    pageTemplate?: string;
    /**
     * 排序值（越小越前）
     */
    sort?: number; // int32
    /**
     * 楼层tag
     */
    tags?: PageFloorTagDetail[];
}
export interface PageFloorTagAdvertisementDetail {
    /**
     * 广告标题
     */
    title?: string;
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、html）
     */
    type?: number; // int32
    imgs?: string;
    linkUrl?: string;
    /**
     * 排序字段
     */
    sort?: number; // int32
}
export interface PageFloorTagDetail {
    /**
     * 标签名称
     */
    name?: string;
    /**
     * 排序字段（越小越前）
     */
    sort?: number; // int32
    /**
     * 广告们
     */
    advertisements?: PageFloorTagAdvertisementDetail[];
    /**
     * 商品们
     */
    goods?: PageFloorTagGoodsDetail[];
    /**
     * 文本标签们
     */
    txtLinks?: PageFloorTagTxtLinksDetail[];
}
export interface PageFloorTagGoodsDetail {
    /**
     * 商品Id
     */
    goodsId?: number; // int64
    goodsName?: string;
    goodsSn?: string;
    imageCover?: string;
    /**
     * 排序字段
     */
    sort?: number; // int32
}
export interface PageFloorTagTxtLinksDetail {
    name?: string;
    /**
     * 链接地址
     */
    linkUrl?: string;
    /**
     * 排序字段（越小越前）
     */
    sort?: number; // int32
}
export interface PageRequest {
    pageSize: number; // int32
    pageIndex: number; // int32
}
/**
 * 分页参数
 */
export interface PageResponse {
    /**
     * 总数
     */
    total?: number; // int32
    /**
     * 页码
     */
    currentPage?: number; // int32
    /**
     * 页容量
     */
    pageSize?: number; // int32
    /**
     * 总页数
     */
    pageCount?: number; // int32
}
/**
 * 页面类型详情
 */
export interface PageTypeResponse {
    /**
     * 雪花主键
     */
    id?: number; // int64
    /**
     * 名称
     */
    name?: string;
}
/**
 * 根据页面类型查询页面位置列表和广告列表
 */
export interface PageTypeToPostionListRequest {
    /**
     * 广告类型（1、图片，2、flash，3、视频，4、文本）
     */
    type?: number; // int32
    /**
     * 页面类型key，前端维护
     */
    pageTypeKey?: number; // int64
    /**
     * 页面位置key，前端维护
     */
    positionKey?: number; // int32
    /**
     * 子类型ID没有时传""
     */
    DisplayCategoryId?: string;
}
/**
 * 分页
 */
export interface PagingResponseCustomerFavoritesResposne_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: CustomerFavoritesResposne[];
}
/**
 * 分页
 */
export interface PagingResponseFeaturedCityResponse_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: FeaturedCityResponse[];
}
/**
 * 分页
 */
export interface PagingResponseGoodPostGoodsResponse_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: GoodPostGoodsResponse[];
}
/**
 * 分页
 */
export interface PagingResponseGoodsRecommendSearchResponse_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: GoodsRecommendSearchResponse[];
}
/**
 * 分页
 */
export interface PagingResponseGoods_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: Goods[];
}
/**
 * 分页
 */
export interface PagingResponseListNewsSearchResponse__ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: NewsSearchResponse[][];
}
/**
 * 分页
 */
export interface PagingResponseMuseumDetailResponse_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: MuseumDetailResponse[];
}
/**
 * 分页
 */
export interface PagingResponseMuseum_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: Museum[];
}
/**
 * 分页
 */
export interface PagingResponseOrderAppInfo_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: OrderAppInfo[];
}
/**
 * 分页
 */
export interface PagingResponsePromotionGoodsInfo_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: PromotionGoodsInfo[];
}
/**
 * 分页
 */
export interface PagingResponsePublicWefareItem_ {
    /**
     * 分页参数
     */
    paging?: PageResponse;
    /**
     * 数据，有改动
     */
    itemList?: PublicWefareItem[];
}
export interface PayRequest {
    /**
     * 订单编号
     */
    Sn?: string;
    /**
     * 支付方式 1 微信 2 支付宝 3 智慧卡 4 pc微信 5 pc支付宝 6 pc智慧生活卡
     */
    PaymentType?: number; // int32
    /**
     * 成功url
     */
    ReturnUrl?: string;
    /**
     * 取消url
     */
    CancelUrl?: string;
}
export interface PayResponse {
    /**
     * 错误码
     */
    errCode?: number; // int32
    /**
     * 支付结果说明，包括错误原因，用于显示，例如：支付成功、系统错误、微信服务器爆炸等
     */
    retMsg?: string;
    /**
     * 商户订单号
     */
    merOrder?: string;
    /**
     * 网关交易流水号
     */
    gateSn?: string;
    /**
     * 支付渠道交易流水号
     */
    channelSn?: string;
    /**
     * 支付渠道交易处理时间
     */
    channelTnTime?: string;
    /**
     * 交易金额，单位分
     */
    txnAmount?: string;
    /**
     * 货币类型。（详见附录）
     */
    currency?: string;
    /**
     * 订单状态
     */
    status?: string;
    /**
     * 数据
     */
    data?: string;
}
export interface PayTypeResponse {
    /**
     * 主键Id
     */
    id?: number; // int64
    /**
     * 支付方式名称
     */
    name?: string;
    /**
     * 支付发票类型（1、不支持发票，2、支持普通发票，3、支持增值税专用发票，4、支持普通和增值税专用发票）
     */
    billType?: number; // int32
    /**
     * 排序
     */
    sort?: number; // int32
}
/**
 * 搜索专题列表
 */
export interface PostTopicSearchRequest {
    /**
     * 是否菜单
     */
    IsMenu?: boolean;
}
/**
 * 搜索专题详情
 */
export interface PostTopicUrlSearchRequest {
    /**
     * 专题url地址
     */
    Url?: string;
}
/**
 * 限时抢购分页列表
 */
export interface PromotionGoodsInfo {
    /**
     * 商品id
     */
    goodsId?: number; // int32
    /**
     * 商品编号
     */
    GoodsSn?: string;
    /**
     * 商品图片URL
     */
    goodsImage?: string;
    /**
     * 商品轮播图片地址
     */
    bannerImages?: string[];
    /**
     * 商品名称
     */
    goodsName?: string;
    /**
     * 商品描述
     */
    desc?: string;
    /**
     * 商品现有价格
     */
    goodsPrice?: number; // double
    /**
     * 商品原价
     */
    goodsPriceOriginal?: number; // double
    /**
     * 商品市场价格
     */
    marketingPrice?: number; // double
    /**
     * 商品单位
     */
    priceUnit?: string;
    /**
     * 商品销量
     */
    SalesVolume?: number; // int64
    /**
     * 商品库存
     */
    stock?: number; // int32
    /**
     * 商品活动标签 最多两个
     */
    promotion?: string[];
    /**
     * 秒杀截止时间-当前时间
     */
    remainingTime?: number; // int32
    /**
     * 免运费最低价格
     */
    shippingFreeLimit?: number; // double
    /**
     * 商品状态:1 - 上架0 - 下架;
     */
    goodsStatus?: number; // int32
    /**
     * 每人限购
     */
    goodsLimit?: number; // int32
}
export interface PublicWefareItem {
    /**
     * 图片URL
     */
    imgUrl?: string[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 标签
     */
    tags?: string[];
    /**
     * 描述(原Describe)
     */
    description?: string;
    /**
     * 公益活动id
     */
    id?: number; // int32
    /**
     * 联系电话
     */
    tel?: string;
}
export interface PublicWelfareType {
    /**
     * Id
     */
    id?: number; // int32
    /**
     * 图片标题
     */
    name?: string;
    /**
     * 图片路径
     */
    imgUrl?: string;
}
export interface PublicWelfareTypeResponse {
    /**
     * 类型List（原publicWelfareList）
     */
    publicWelfareTypeList?: PublicWelfareType[];
}
/**
 * 查询购物车返回值
 */
export interface QueryCartResponse {
    /**
     * 购物车商品
     */
    CartList?: CartResponse[];
    /**
     * 购物车金额
     */
    TotalPrice?: number; // double
}
export interface QueryPageRequestBannerSearchRequest_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: BannerSearchRequest;
}
export interface QueryPageRequestFeatureCityAdPostRequest_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: FeatureCityAdPostRequest;
}
export interface QueryPageRequestGoodsSearchRequest_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: GoodsSearchRequest;
}
export interface QueryPageRequestObject_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: {
    };
}
export interface QueryPageRequestPageTypeToPostionListRequest_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: PageTypeToPostionListRequest;
}
export interface QueryPageRequestPostTopicSearchRequest_ {
    paging: PageRequest;
    sort?: SortOpt[];
    condition: PostTopicSearchRequest;
}
/**
 * 重置密码request
 */
export interface ResetPasswordRequest {
    /**
     * 电话号码
     */
    phoneNumber: string;
    /**
     * 注册码
     */
    verifyCode: string;
    /**
     * 新密码
     */
    newPassword: string;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextBoolean_ {
    msg?: string;
    code?: string;
    data?: boolean;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextCategory_ {
    msg?: string;
    code?: string;
    data?: Category;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextCheckoutCartResponse_ {
    msg?: string;
    code?: string;
    data?: CheckoutCartResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodOriginResponseDTOGoodGetGoodsOriginResponse__ {
    msg?: string;
    code?: string;
    data?: GoodOriginResponseDTOGoodGetGoodsOriginResponse_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodsCategoryAncestorsResponse_ {
    msg?: string;
    code?: string;
    data?: GoodsCategoryAncestorsResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodsInfoBasic_ {
    msg?: string;
    code?: string;
    data?: GoodsInfoBasic;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodsIsStored_ {
    msg?: string;
    code?: string;
    data?: GoodsIsStored;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodsLevelResponse_ {
    msg?: string;
    code?: string;
    data?: GoodsLevelResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextGoodsSearchResponse_ {
    msg?: string;
    code?: string;
    data?: GoodsSearchResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextHelpCenterDto_ {
    msg?: string;
    code?: string;
    data?: HelpCenterDto;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextHotSearchKeysResponse_ {
    msg?: string;
    code?: string;
    data?: HotSearchKeysResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextIEnumerableCategoryAndTitle__ {
    msg?: string;
    code?: string;
    data?: CategoryAndTitle[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextIEnumerableFCGoods__ {
    msg?: string;
    code?: string;
    data?: FCGoods[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextImgCapcha_ {
    msg?: string;
    code?: string;
    data?: ImgCapcha;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextInt32_ {
    msg?: string;
    code?: string;
    data?: number; // int32
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListAddressResponse__ {
    msg?: string;
    code?: string;
    data?: AddressResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListAddressTreeResponse__ {
    msg?: string;
    code?: string;
    data?: AddressTreeResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListBannerResponse__ {
    msg?: string;
    code?: string;
    data?: BannerResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListGoodPostGoodsResponse__ {
    msg?: string;
    code?: string;
    data?: GoodPostGoodsResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListHelpCenterResponse__ {
    msg?: string;
    code?: string;
    data?: HelpCenterResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListHotKeyWordSearchResponse__ {
    msg?: string;
    code?: string;
    data?: HotKeyWordSearchResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListKeyWordSearchRequest__ {
    msg?: string;
    code?: string;
    data?: KeyWordSearchRequest[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListKeyWordSearchResponse__ {
    msg?: string;
    code?: string;
    data?: KeyWordSearchResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListPageFloorDetail__ {
    msg?: string;
    code?: string;
    data?: PageFloorDetail[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextListSysAddressResponse__ {
    msg?: string;
    code?: string;
    data?: SysAddressResponse[];
}
/**
 * 公共返回体结构
 */
export interface ResponseContextMuseumDetailResponse_ {
    msg?: string;
    code?: string;
    data?: MuseumDetailResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextNewGoodsDto_ {
    msg?: string;
    code?: string;
    data?: NewGoodsDto;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextNewsResponse_ {
    msg?: string;
    code?: string;
    data?: NewsResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextObject_ {
    msg?: string;
    code?: string;
    data?: {
    };
}
/**
 * 公共返回体结构
 */
export interface ResponseContextOrderDetailOutput_ {
    msg?: string;
    code?: string;
    data?: OrderDetailOutput;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextOrderPayOrdersDetailResponse_ {
    msg?: string;
    code?: string;
    data?: OrderPayOrdersDetailResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPWDetail_ {
    msg?: string;
    code?: string;
    data?: PWDetail;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPageTypeResponse_ {
    msg?: string;
    code?: string;
    data?: PageTypeResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseCustomerFavoritesResposne__ {
    msg?: string;
    code?: string;
    data?: PagingResponseCustomerFavoritesResposne_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseFeaturedCityResponse__ {
    msg?: string;
    code?: string;
    data?: PagingResponseFeaturedCityResponse_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseGoodPostGoodsResponse__ {
    msg?: string;
    code?: string;
    data?: PagingResponseGoodPostGoodsResponse_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseGoods__ {
    msg?: string;
    code?: string;
    data?: PagingResponseGoods_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseListNewsSearchResponse___ {
    msg?: string;
    code?: string;
    data?: PagingResponseListNewsSearchResponse__;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseMuseumDetailResponse__ {
    msg?: string;
    code?: string;
    data?: PagingResponseMuseumDetailResponse_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseMuseum__ {
    msg?: string;
    code?: string;
    data?: PagingResponseMuseum_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponseOrderAppInfo__ {
    msg?: string;
    code?: string;
    data?: PagingResponseOrderAppInfo_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponsePromotionGoodsInfo__ {
    msg?: string;
    code?: string;
    data?: PagingResponsePromotionGoodsInfo_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPagingResponsePublicWefareItem__ {
    msg?: string;
    code?: string;
    data?: PagingResponsePublicWefareItem_;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPayResponse_ {
    msg?: string;
    code?: string;
    data?: PayResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextPublicWelfareTypeResponse_ {
    msg?: string;
    code?: string;
    data?: PublicWelfareTypeResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextQueryCartResponse_ {
    msg?: string;
    code?: string;
    data?: QueryCartResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextShoppingRecommendSearchDTO_ {
    msg?: string;
    code?: string;
    data?: ShoppingRecommendSearchDTO;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextSignUpResponse_ {
    msg?: string;
    code?: string;
    data?: SignUpResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextString_ {
    msg?: string;
    code?: string;
    data?: string;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextTopicPostTopicSearchResponse_ {
    msg?: string;
    code?: string;
    data?: TopicPostTopicSearchResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextTopicResponse_ {
    msg?: string;
    code?: string;
    data?: TopicResponse;
}
/**
 * 公共返回体结构
 */
export interface ResponseContextUserInfoResponse_ {
    msg?: string;
    code?: string;
    data?: UserInfoResponse;
}
export interface SalesAreaDto {
    code?: string;
    name?: string;
}
/**
 * 发送验证码request
 */
export interface SendVerificationCodeRequest {
    /**
     * 手机号
     */
    phone: string;
    /**
     * 0-登陆 1 - 注册 2 - 找回密码 3 - 更换手机
     */
    verificationCodeType: number; // int32
}
export interface SensitiveSearchRequest {
    KeyWords?: string;
}
/**
 * 推荐购物车商品列表
 */
export interface ShoppingRecommendSearchDTO {
    /**
     * 分页信息
     */
    paging?: PageResponse;
    /**
     * 溯源产品列表
     */
    itemList?: ShoppingRecommendSearchResponse[];
}
/**
 * 推荐购物车商品列表
 */
export interface ShoppingRecommendSearchResponse {
    Id?: number; // int64
    /**
     * 商品id
     */
    GoodId?: number; // int64
    /**
     * 商品名称
     */
    GoodName?: string;
    /**
     * 商品图片URL
     */
    goodsImage?: string;
    /**
     * 商品描述
     */
    desc?: string;
    /**
     * 市场价
     */
    MarketPrice?: number; // double
    /**
     * 销售价
     */
    SalePrice?: number; // double
    /**
     * 手机专享价
     */
    PhonePrice?: number; // double
    /**
     * 价格单位
     */
    priceUnit?: number; // double
    /**
     * 计算后价格
     */
    ComputedPrice?: number; // double
}
/**
 * 用户登录request
 */
export interface SignInRequest {
    /**
     * 用户登陆手机号或者用户名，或者邮箱
     */
    account: string;
    /**
     * 登录密码
     */
    password?: string;
    /**
     * 验证码
     */
    verifyCode?: string;
    /**
     * 登陆类型
     */
    loginType?: "1" | "2";
}
/**
 * 用户注册request
 */
export interface SignUpRequest {
    /**
     * 注册用户手机号
     */
    phone: string;
    /**
     * 验证码
     */
    verficationCode: string;
    /**
     * 新用户密码
     */
    password: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户名
     */
    userName?: string;
    /**
     * 图形验证码session
     */
    imgSession?: string;
    /**
     * 图形验证码
     */
    imgCode?: string;
}
/**
 * 用户注册response
 */
export interface SignUpResponse {
    /**
     * 用户标识
     */
    sessionId?: string;
}
export interface SortOpt {
    field?: number; // int32
    isDesc?: boolean;
}
/**
 * 减少购物车
 */
export interface SubtractCartRequest {
    /**
     * 商品id
     */
    goodsId?: number; // int64
    /**
     * 下单的商品数量
     */
    quantity?: number; // int32
}
export interface SysAddressResponse {
    /**
     * 地区Code
     */
    code: string;
    /**
     * 父级地区Code
     */
    parentCode: string;
    /**
     * 地区名称
     */
    Name?: string;
    /**
     * 拼音首字母
     */
    FirstLetter?: string;
    /**
     * 拼音简拼
     */
    PinyinSimple?: string;
    /**
     * 拼音全拼
     */
    PinyinFull?: string;
    /**
     * 等级
     */
    Level?: number; // int32
    /**
     * 经度
     */
    Longitude?: number; // double
    /**
     * 纬度
     */
    Latitude?: number; // double
    /**
     * 是否是直辖市
     */
    IsMunicipality?: boolean;
}
/**
 * 一线一馆标签
 */
export interface Tag {
    /**
     * 名称
     */
    Name?: string;
    /**
     * 链接
     */
    LinkUrl?: string;
}
/**
 * 搜索专题列表
 */
export interface TopicPostTopicSearchResponse {
    Id?: number; // int64
    /**
     * 是否菜单
     */
    IsMenu?: boolean;
    /**
     * 专题名
     */
    Title?: string;
    /**
     * url
     */
    Url?: string;
}
/**
 * 专题详细页
 */
export interface TopicResponse {
    Id?: number; // int64
    /**
     * 专题名
     */
    Title?: string;
    /**
     * 简称
     */
    ShortTitle?: string;
    /**
     * 是否是菜单
     */
    IsMenu?: boolean;
    /**
     * 排序
     */
    Sort?: number; // int64
    /**
     * url
     */
    Url?: string;
    /**
     * 内容
     */
    Content?: string;
    /**
     * 是否有效
     */
    Enabled?: boolean;
    /**
     * 开始时间
     */
    StartTime?: string; // date-time
    /**
     * 结束时间
     */
    EndTime?: string; // date-time
}
/**
 * 用户信息
 */
export interface UserInfoRequest {
    /**
     * 用户名
     */
    userName: string;
    /**
     * 性别
     */
    sex: number; // int32
    /**
     * 生日
     */
    birthday?: string; // date-time
}
/**
 * 用户信息
 */
export interface UserInfoResponse {
    userName?: string;
    sex?: number; // int32
    birthday?: string; // date-time
}
