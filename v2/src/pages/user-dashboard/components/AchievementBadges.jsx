import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ achievements }) => {
  const getBadgeIcon = (type) => {
    const iconMap = {
      'first-document': 'FileText',
      'power-user': 'Zap',
      'template-explorer': 'Compass',
      'sharing-champion': 'Share2',
      'speed-creator': 'Clock',
      'perfectionist': 'Star'
    };
    return iconMap?.[type] || 'Award';
  };

  const getBadgeColor = (rarity) => {
    const colorMap = {
      'common': 'from-slate-400 to-slate-500',
      'rare': 'from-blue-400 to-blue-500',
      'epic': 'from-purple-400 to-purple-500',
      'legendary': 'from-yellow-400 to-yellow-500'
    };
    return colorMap?.[rarity] || 'from-gray-400 to-gray-500';
  };

  const unlockedAchievements = achievements?.filter(achievement => achievement?.unlocked);
  const lockedAchievements = achievements?.filter(achievement => !achievement?.unlocked);

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center mb-6">
        <Icon name="Award" size={24} className="text-accent mr-2" />
        <h3 className="text-lg font-semibold text-foreground">Achievements</h3>
        <span className="ml-2 px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
          {unlockedAchievements?.length}/{achievements?.length}
        </span>
      </div>
      {/* Unlocked Achievements */}
      {unlockedAchievements?.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Recently Unlocked</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {unlockedAchievements?.slice(0, 4)?.map((achievement) => (
              <div key={achievement?.id} className="group relative">
                <div className="text-center p-3 border border-border rounded-lg hover:shadow-brand transition-all duration-200">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getBadgeColor(achievement?.rarity)} rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                    <Icon name={getBadgeIcon(achievement?.type)} size={20} color="white" />
                  </div>
                  <h5 className="font-medium text-foreground text-xs mb-1">{achievement?.title}</h5>
                  <p className="text-text-secondary text-xs line-clamp-2">{achievement?.description}</p>
                  {achievement?.unlockedAt && (
                    <p className="text-success text-xs mt-1">
                      {new Date(achievement.unlockedAt)?.toLocaleDateString()}
                    </p>
                  )}
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 w-48">
                  <p className="text-xs text-popover-foreground">{achievement?.description}</p>
                  <p className="text-xs text-text-secondary mt-1">Rarity: {achievement?.rarity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Progress Towards Next Achievement */}
      {lockedAchievements?.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Next Milestone</h4>
          <div className="space-y-3">
            {lockedAchievements?.slice(0, 2)?.map((achievement) => (
              <div key={achievement?.id} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                      <Icon name={getBadgeIcon(achievement?.type)} size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm">{achievement?.title}</h5>
                      <p className="text-text-secondary text-xs">{achievement?.description}</p>
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary">
                    {achievement?.progress}/{achievement?.target}
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(achievement?.progress / achievement?.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementBadges;