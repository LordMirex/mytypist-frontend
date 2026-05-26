import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ReviewsSection = ({ reviews, overallRating, ratingBreakdown }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? reviews : reviews?.slice(0, 6);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating 
            ? 'text-accent fill-current' :'text-border'
        }`}
      />
    ));
  };

  return (
    <div className="bg-surface py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Users Are Saying
          </h2>
          <p className="text-lg text-text-secondary">
            Real feedback from professionals who've used this template
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Rating */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {overallRating}
                </div>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(Math.floor(overallRating))}
                </div>
                <p className="text-text-secondary">
                  Based on {reviews?.length} reviews
                </p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {ratingBreakdown?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm text-text-secondary w-8">
                      {item?.stars}★
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item?.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary w-12">
                      {item?.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {displayedReviews?.map((review, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-brand transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <Image
                      src={review?.avatar}
                      alt={review?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">
                          {review?.name}
                        </h4>
                        <div className="flex space-x-1">
                          {renderStars(review?.rating)}
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary">
                        {review?.role} • {review?.date}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    {review?.comment}
                  </p>
                  
                  {review?.verified && (
                    <div className="flex items-center space-x-2">
                      <Icon name="ShieldCheck" size={16} className="text-success" />
                      <span className="text-sm text-success font-medium">
                        Verified Purchase
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {reviews?.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-border transition-colors font-medium"
                >
                  {showAllReviews ? 'Show Less' : `Show All ${reviews?.length} Reviews`}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Review CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-text-secondary">
            <Icon name="MessageSquare" size={20} />
            <span>Used this template? Share your experience to help others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;