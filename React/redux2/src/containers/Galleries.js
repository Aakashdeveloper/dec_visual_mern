import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearselectedGallery} from '../actions'
import { bindActionCreators} from 'redux';
import Slider from 'react-slick';

import Counter from './LikesCounter';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Galleries extends Component {
    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearselectedGallery();
    }
    renderSlider = ({selected}) => {
        if (selected) {
          const gallery = selected[0]
          return (
            <div>
              <h3>The best of {gallery.artist}</h3>
              <Slider {...settings}>
                {gallery.images.map((item,index) => {
                  return(
                    <div key={index} className="slide-item">
                      <div>
                        <div 
                        className="image"
                        style={{background:`url(/images/galleries/${item.img})`}}
                        >
                        </div>
                        <div className="description">
                          <span>{item.desc}</span>
                        </div>
    
                      </div>
                      
                    </div>
                  )
                })}
              </Slider>
              <Counter 
                           articleId={gallery.id}
                           type="HANDLE_LIKES_GALLERY"
                           section="galleries"
                           likes={gallery.likes[0]}
                           dislikes={gallery.likes[1]} />
            </div>
          )
    
        }
      }

    render(){
        return(
            <div className="slide-item-wrap">
                <div className="main-slider">
                {this.renderSlider(this.props.gallery)}
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        gallery:state.gallery
    }
}

function mapDispatchToProps(disptach){
    return bindActionCreators({selectedGallery, clearselectedGallery}, disptach)
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries);


var data = [
    {"name":"aa", "classn":"angular", "rollno":1},
    {"name":"bb", "classn":"angular", "rollno":2}
]


checkname= (name) =>{
    out = name.i
    return name
}


var jsonData = [{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}];
for(var i=0;i<jsonData.length;i++){
  if(jsonData[i]['name'] == 'name2'){
    console.log('The value is: ' + jsonData[i]['value']);
    break;
  }
}
