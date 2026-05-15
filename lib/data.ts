import { Category, Product } from './types';
export const giftTargets=['女性へ','男性へ','友人へ','家族へ','パートナーへ','仕事関係の方へ'];
export const giftScenes=['誕生日','引っ越し祝い','結婚祝い','出産祝い','お礼','季節の贈り物'];
export const budgets=['〜3,000円','3,000円〜5,000円','5,000円〜10,000円','10,000円〜'];
const now=new Date().toISOString();
export const initialCategories:Category[]=['A','B','C','D','E','F'].map((x,i)=>({id:`cat-${i+1}`,name:`カテゴリ${x}`,slug:`category-${x.toLowerCase()}`,description:`カテゴリ${x}の説明`,display_order:i+1,is_active:true,created_at:now,updated_at:now}));
const names=['Ceramic Mug','Wooden Tray','Linen Pouch','Desk Object','Gift Set'];
export const initialProducts:Product[]=Array.from({length:50}).map((_,i)=>{const price=1500+(i*270)%13500;const id=i+1;return {id:`p-${id}`,name:`${names[i%5]} ${String(id).padStart(2,'0')}`,slug:`item-${id}`,price,description:'暮らしに馴染む、ミニマルで上質な雑貨です。',short_description:'静かな佇まいのギフト向け雑貨。',images:[`https://picsum.photos/seed/gift${id}/900/1100`],category_ids:[`cat-${(i%6)+1}`],tags:['gift','minimal'],stock_quantity:(i%9===0?0:5+(i%20)),is_published:true,is_new:i<8,is_best_seller:i>=8&&i<16,is_featured:i%7===0,is_gift_recommended:i<12,gift_targets:[giftTargets[i%6],giftTargets[(i+2)%6]],gift_scenes:[giftScenes[i%6]],gift_budget_range:price<=3000?budgets[0]:price<=5000?budgets[1]:price<=10000?budgets[2]:budgets[3],gift_wrapping_available:i<30,message_card_available:(i+5)%50<30,material:'陶器 / 木材 / リネン',size:'W120 x D120 x H80mm',weight:'250g',shipping_type:'通常配送',created_at:now,updated_at:now};});
