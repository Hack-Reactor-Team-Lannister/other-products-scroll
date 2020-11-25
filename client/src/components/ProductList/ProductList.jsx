import React from 'react';
import {
  OuterListWrapper,
  InnerListWrapper,
  ArrowWrapper,
  ArrowRight,
  ArrowLeft,
  ListTitle,
  ArrowListWrapper,
} from './productListStyles';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
    this.listref = React.createRef();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.scrollright = this.scrollright.bind(this);
    this.scrollleft = this.scrollleft.bind(this);
  }

  handleMouseOver() {
    this.setState({
      hovering: true,
    });
  }

  handleMouseOut() {
    this.setState({
      hovering: false,
    });
  }

  scrollright() {
    const node = this.listref.current;
    node.scrollLeft += 740;
  }

  scrollleft() {
    const node = this.listref.current;
    node.scrollLeft -= 740;
  }

  render() {
    const {
      hovering,
    } = this.state;
    const {
      Product,
      AddBasket,
      relatedProducts,
      setMainProductId,
      listTitle,
    } = this.props;
    return (
      <OuterListWrapper>
        <ListTitle>{listTitle}</ListTitle>
        <ArrowListWrapper
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
        >
          <ArrowWrapper onClick={this.scrollleft} hovering={hovering}>
            <ArrowLeft hovering={hovering} />
          </ArrowWrapper>
          <InnerListWrapper ref={this.listref}>
            {relatedProducts.map((p) => (
              <Product
                AddBasket={AddBasket}
                key={p.id}
                id={p.id}
                productName={p.product_name}
                imageOneUrl={p.image_one_url}
                imageTwoUrl={p.image_two_url}
                pageUrl={p.page_url}
                price={p.price}
                hearted={p.hearted}
                briefDescription={p.brief_description}
                collectionName={p.collection_name}
                setMainProductId={setMainProductId}
              />
            ))}
          </InnerListWrapper>
          <ArrowWrapper onClick={this.scrollright} hovering={hovering}>
            <ArrowRight hovering={hovering} />
          </ArrowWrapper>
        </ArrowListWrapper>
      </OuterListWrapper>
    );
  }
}