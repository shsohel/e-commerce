import React from 'react';
import Layout from '../../components/Layout';
import SingleArticle from '../../components/view/article/single-article';

const Article = () => {
    return (
        <Layout>
            <div className="px-6">
                <SingleArticle />
            </div>
        </Layout>
    );
};

export default Article;