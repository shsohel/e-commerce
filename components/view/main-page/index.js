import React from 'react';
import ArticleSection from './article-section';
import BookDownloadSections from './book-download-section';
import CoverSection from './cover-section';
import EventSection from './event-section';
import FilterSection from './filter-section';
import SubscriptionSection from './subscription-section';

const MainPage = () => {
  return (
    <>
      <div className="bg-[url('/CoverImage.png')] bg-no-repeat bg-cover text-white mx-auto   ">
        <CoverSection />

      </div>
      <FilterSection />
      <ArticleSection />
      <BookDownloadSections />
      <EventSection />
      <SubscriptionSection />
    </>
  );
};

export default MainPage;