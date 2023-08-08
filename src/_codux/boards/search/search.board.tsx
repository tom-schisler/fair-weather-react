import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Search from '../../../components/search/Search.jsx';

export default createBoard({
    name: 'Search',
    Board: () => <Search />
});
