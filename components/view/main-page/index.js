import React from 'react'
import ArticleSection from './article-section';
import BookDownloadSections from './book-download-section';
import CoverSection from './cover-section'
import EventSection from './event-section';
import FilterSection from './filter-section';
import SubscriptionSection from './subscription-section';

const MainPage = () => {
  return (
    <>
        <CoverSection/>
        <FilterSection/>
        <ArticleSection/>
        <BookDownloadSections/>
        <EventSection/>
        <SubscriptionSection/>
    </>
  )
}

export default MainPage