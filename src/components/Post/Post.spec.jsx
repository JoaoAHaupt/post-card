import { render, screen } from '@testing-library/react';
import {Post} from './index';

const mock = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png',
}

describe('<PostCard 1/>', () => {
    it("should render PostCard correctly", ()=>{
        render(<Post {...mock}/>);
        
        expect(screen.getByRole('img', {name:/title 1/i})).toHaveAttribute('src', mock.cover);
        expect(screen.getByRole('heading', {name:'title 1 1'})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();

    })

    it('should match snapshot', () =>{
        const {container} = render(<Post {...mock}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
});