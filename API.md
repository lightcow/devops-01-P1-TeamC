|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|조회|비디오 전체 조회|GET|/video|none|res 200
### 성공시 응답
```
[{
    video_idx: 1,
    title: 초보자도 쉽게 배우는 서핑,
    youtube_url: https://www.youtube.com/watch?v=f3m_WqxhL4o
    tag : 서핑보드 숏보드
  },
  {
    video_idx: 2,
    title: 재미있는 기타 레슨,
    youtube_url: https://www.youtube.com/watch?v=BHvaJvWW-L0
    tag : 통기타 기타줄
  }, ...]
```
|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|조회|특정 비디오 상품 조회|GET|/video/:id|none|res 200
### 성공시 응답
```
[{ 
   video : {  video_idx: 1,
   title: 초보자도 쉽게 배우는 서핑,
  youtube_url: https://www.youtube.com/watch?v=f3m_WqxhL4o },
  product : [
    { 
        product_idx : 1,
        price : 10000,
        product_name : ‘서핑보드’,
        product_img : ‘url;...’
     },

    { 
        product_idx : 2,
        price : 10000,
        product_name : ‘서핑리쉬’,
        product_img : ‘url;...’
    },
   ...
 ]
}
]
```
|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|조회|태그로 영상검색|GET|/search?type=video&tag=searchword|none|res 200
### 성공시응답
```
[
    {
    video_idx: 1,
    title: 초보자도 쉽게 배우는 서핑,
    youtube_url: https://www.youtube.com/watch?v=f3m_WqxhL4o
    tag : ‘서핑보드 패들링’
  },
  {
    video_idx: 3,
    title: 재미있는 서핑 레슨,
    youtube_url: https://www.youtube.com/watch?v=BHvaJvWW-L0
  },
  ...
]
```
|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|생성|장바구니 담기|POST|/order|
### 요청바디
```
headers
{
  authorization: authorization token 
}
{
    product_id : 1,
    quantity: 2
}
```
### 성공시 응답
```
{
    product_id : 1,
    quantity: 2,
    product_name : ‘서핑보드’,
    product_img : ‘url’
	ordered : 0
}
```
|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|조회|장바구니 전체 조회|GET|/order|none|res200
### 성공시 응답
```
[
{
    order_idx : 1
    product_id : 1,
    quantity: 2,
    product_name : ‘서핑보드’,
    product_img : ‘url’
	},
	{
    order_idx : 2
    product_id : 2,
    quantity: 1,
    product_name : ‘서핑리쉬’, //가공
    product_img : ‘url’//가공  
},
	.....
]
```
|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|수정|장바구니 수량 수정|PUT|/order/:order_id|
### 요청바디
```
headers
{
  authorization: authorization token // id
}
[
  {
  product_id: 1
  quantity : 10
}
  ...
]
```
### 성공시 응답
```
{
    order_idx : 1
    product_id : 1,
    quantity: 10,
    product_name : ‘서핑보드’,
    product_img : ‘url’
}
```

|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|삭제|장바구니 상품 삭제|DELETE|/order/:order_id|none|
### 성공시 응답
```
{
  status : ‘ok’
}
```

|카테고리|기능|메소드|엔드포인트|요청바디|성공시 응답|
|-------|-----|------|------|-------|-----|
|수정|장바구니 상품 결제|PUT|/payment/:order_id|
### 요청바디
```
headers
{
  authorization: authorization token
}
body
{
  order_idx : 1
}
```
### 성공시 응답
```
[{
    order_idx : 1
    product_id : 1,
    quantity: 2,
    product_name : ‘서핑보드’,
    product_img : ‘url’
    ordered : 1
},
{
    order_idx : 2
    product_id : 2,
    quantity: 1,
    product_name : ‘기타’,
    product_img : ‘url’
    ordered : 1
}]
```
