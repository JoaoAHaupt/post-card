import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { GoButton } from '../../components/Buttons/GoButton/index';
import { BackButton } from '../../components/Buttons/BackButton/index';
import { Input } from '../../components/Input';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [oldCounter, setOldCounter] = useState(0);
  const [counter, setCounter] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = counter + 4 >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
  : posts;


  const handleLoadPosts = useCallback (async (oldCounter, counter) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(oldCounter, counter));
    setAllPosts(postsAndPhotos);
  }, []);
    

  useEffect(() => {
    handleLoadPosts(oldCounter, counter);
  }, [handleLoadPosts, oldCounter, counter]);
  

  const handleClickBack = () => {
    if (oldCounter <= 0) {
      return;
    }
    const newCounter = Math.max(counter - 4, 0);
    const counterBack = Math.max(counter - 8, 0);
    setCounter(newCounter);
    setOldCounter(counterBack);
    handleLoadPosts();
    console.log(counterBack, newCounter);
  };

  const handleClickGo = () => {
    const newCounter = Math.min(counter + 4, allPosts.length);
    if (newCounter !== counter) {
      setOldCounter(counter);
      setCounter(newCounter);
      handleLoadPosts();
      console.log(counter, newCounter);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className='container'>
      {!!searchValue && (
        <>
          <h1>Search Va ue: {searchValue}</h1>
        </>
      )}
      <Input searchValue={searchValue} handleChange={handleChange} />
      <Posts posts={filteredPosts} />
      <h1>Page: {counter / 4}/25</h1>

      <div className='align-buttons'>
        <BackButton text="Come back pages" onClick={handleClickBack} disable={noMorePosts} />
        <GoButton text="Load more pages" onClick={handleClickGo} disable={noMorePosts} />
      </div>
    </section>
  );
};

export default Home;
