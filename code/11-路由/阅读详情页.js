 var ReadDetail = React.createClass({
                
                //初始化状态 this.state.list
                getInitialState:function(){
                    return {
                        item:{}
                    }  
                },
                
                
                componentDidMount:function(){
                    
                    var url = readDetailUrl+"&id="+this.props.params.id;
                    var self = this;
                    $.getJSON(url,{},function(r){
                        
                        
                        //数据驱动界面
                        self.setState({
                            item:r.data
                        })
                    })
                    
                },
                
                
                render:function(){
                    
                    var vd = <div>ReadDetail
                    
                        <p>路由参数id: {this.props.params.id}</p>
                        
                        <p>{this.state.item.title}</p>
                        <p>作者: {this.state.item.author_name}</p>
                        <p> {this.state.item.hp_content}</p>
                    </div>
                    return vd;
                }
            })
            