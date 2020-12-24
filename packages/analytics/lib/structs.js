/*
 *  Copyright (c) 2016-present Invertase Limited & Contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this library except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { define, string, optional, number } from 'superstruct';

const isShortDate = function (value) {
  return typeof value === 'string' && !!value.match(/^\d{4}-\d{2}-\d{2}$/);
};

const Item = define({
  item_brand: optional(string()),
  item_id: optional(string()),
  item_name: optional(string()),
  item_category: optional(string()),
  item_category2: optional(string()),
  item_category3: optional(string()),
  item_category4: optional(string()),
  item_category5: optional(string()),
  item_list_id: optional(string()),
  item_list_name: optional(string()),
  item_location_id: optional(string()),
  item_variant: optional(string()),
  quantity: number(),
});

export const ScreenView = define({
  screen_class: optional(string()),
  screen_name: optional(string()),
});

export const AddPaymentInfo = define({
  items: optional([Item]),
  value: number(),
  currency: optional(string()),
  coupon: optional(string()),
  payment_type: optional(string()),
});

export const AddShippingInfo = define({
  items: optional([Item]),
  value: number(),
  currency: optional(string()),
  coupon: optional(string()),
  shipping_tier: optional(string()),
});

export const AddToCart = define({
  items: optional([Item]),
  value: number(),
  currency: optional(string()),
});

export const AddToWishlist = define({
  items: optional([Item]),
  value: number(),
  currency: optional(string()),
});

export const BeginCheckout = define({
  items: optional([Item]),
  value: number(),
  currency: optional(string()),
  coupon: optional(string()),
});

export const CampaignDetails = define({
  source: string(),
  medium: string(),
  campaign: string(),
  term: optional(string()),
  content: optional(string()),
  aclid: optional(string()),
  cp1: optional(string()),
});

export const EarnVirtualCurrency = define({
  virtual_currency_name: string(),
  value: number(),
});

export const GenerateLead = define({
  currency: optional(string()),
  value: number(),
});

export const JoinGroup = define({
  group_id: string(),
});

export const LevelEnd = define({
  level: number(),
  success: optional(string()),
});

export const LevelStart = define({
  level: number(),
});

export const LevelUp = define({
  level: number(),
  character: optional(string()),
});

export const Login = define({
  method: string(),
});

export const PostScore = define({
  score: number(),
  level: number(),
  character: optional(string()),
});

export const Refund = define({
  affiliation: optional(string()),
  coupon: optional(string()),
  currency: optional(string()),
  items: optional([Item]),
  shipping: number(),
  tax: number(),
  value: number(),
  transaction_id: optional(string()),
});

export const Purchase = define({
  affiliation: optional(string()),
  coupon: optional(string()),
  currency: optional(string()),
  items: optional([Item]),
  shipping: number(),
  tax: number(),
  value: number(),
  transaction_id: optional(string()),
});

export const RemoveFromCart = define({
  currency: optional(string()),
  items: optional([Item]),
  value: number(),
});

export const Search = define({
  search_term: string(),
  number_of_nights: number(),
  number_of_rooms: number(),
  number_of_passengers: number(),
  origin: optional(string()),
  destination: optional(string()),
  start_date: optional(isShortDate),
  end_date: optional(isShortDate),
  travel_class: optional(string()),
});

export const SelectContent = define({
  content_type: string(),
  item_id: string(),
});

export const SelectItem = define({
  items: optional([Item]),
  item_list_id: optional(string()),
  item_list_name: optional(string()),
  content_type: optional(string()),
});

export const SelectPromotion = define({
  creative_name: string(),
  creative_slot: string(),
  items: optional([Item]),
  location_id: string(),
  promotion_id: string(),
  promotion_name: string(),
});

export const SetCheckoutOption = define({
  checkout_step: number(),
  checkout_option: string(),
});

export const Share = define({
  content_type: string(),
  item_id: string(),
  method: string(),
});

export const SignUp = define({
  method: string(),
});

export const SpendVirtualCurrency = define({
  item_name: string(),
  virtual_currency_name: string(),
  value: number(),
});

export const UnlockAchievement = define({
  achievement_id: string(),
});

export const ViewCart = define({
  currency: optional(string()),
  items: optional([Item]),
  value: number(),
});

export const ViewItem = define({
  currency: optional(string()),
  items: optional([Item]),
  value: number(),
});

export const ViewItemList = define({
  items: optional([Item]),
  item_list_id: optional(string()),
  item_list_name: optional(string()),
});

export const ViewPromotion = define({
  items: optional([Item]),
  location_id: optional(string()),
  creative_name: optional(string()),
  creative_slot: optional(string()),
  promotion_id: optional(string()),
  promotion_name: optional(string()),
});

export const ViewSearchResults = define({
  search_term: string(),
});
