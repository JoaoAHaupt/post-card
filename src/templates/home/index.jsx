import './styles.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { GoButton } from '../../components/GoButton';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';

class Home extends Component {
  state = {oldCounter: 0, counter: 4, posts: [], allPosts: [], searchValue : ''};

  async componentDidMount() {
    const postsAndPhotos = await loadPosts(this);
    const { oldCounter, counter } = this.state;

    this.setState({ posts: postsAndPhotos.slice(oldCounter, counter), allPosts: postsAndPhotos });
  }

  handleClickBack = () => {
    const { counter, oldCounter } = this.state;
  
    if (oldCounter <=0) {
      return;
    }
  
    const newCounter = Math.max(counter - 4, 0);
    const counterBack = Math.max(counter - 8, 0);
  
    this.setState({ oldCounter: counterBack, counter: newCounter }, () => {
      this.componentDidMount();
    });
  
    console.log(counterBack, newCounter);
  };
  
  handleClickGo = () => {
    const { counter, allPosts } = this.state;
    const newCounter = Math.min(counter + 4, allPosts.length);

    if (newCounter !== counter) {
      this.setState({ oldCounter: counter, counter: newCounter }, () => {
        this.componentDidMount();
      });
      console.log(counter, newCounter)
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, counter, allPosts, searchValue } = this.state;
    const noMorePosts = counter + 4 >= allPosts.length;
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;
    return (
      
      <section className='container'>
        {!!searchValue && (
          <>
            <h1>Search Value: {searchValue}</h1>
          </>
        )}
        <Input searchValue={searchValue} handleChange={this.handleChange}/>
        <Posts posts={filteredPosts}/>
          <h1>Page: {counter/4}/25</h1>

          <div className='align-buttons'>
            <BackButton onClick={this.handleClickBack} disable={noMorePosts}/>
            <GoButton onClick={this.handleClickGo} disable={noMorePosts} />
        </div>

       

        
      </section>
    );
  }
}

export default Home;
