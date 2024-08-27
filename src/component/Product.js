function Product() {
  const products = [ // 상품 배열 생성
    {title: '양배추', id: 1, isFruit: false},
    {title: '마늘', id: 2, isFruit: false},
    {title: '사과', id: 3, isFruit: true},
  ];

  const listItems = products.map(product =>
    <li key={product.id} /* key 값은 고유해야 함 */
        style={{color: product.isFruit ? 'red' : 'blue'}}>      {product.title} {/* 상품 배열을 li 태그에 담기 */}
        {/* style 태그는 {{}} 중괄호 2개 써야 함, "style={} JSX 문법 + {키: 값}" */}
    </li>
  )

  return(
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default Product;