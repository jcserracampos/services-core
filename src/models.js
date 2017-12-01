import { catarse, commonPayment, commonAnalytics, commonProject } from './api';

const models = {
    projectSubscribersInfo: commonAnalytics.model('rpc/project_subscribers_info'),
    projectReward: commonProject.model('rewards'),
    projectSubscriber: commonProject.model('subscribers'),
    commonPayment: commonPayment.model('rpc/pay'),
    country: catarse.model('countries'),
    state: catarse.model('states'),
    contributionDetail: catarse.model('contribution_details'),
    contributionActivity: catarse.model('contribution_activities'),
    projectDetail: catarse.model('project_details'),
    userDetail: catarse.model('user_details'),
    balance: catarse.model('balances'),
    balanceTransaction: catarse.model('balance_transactions'),
    balanceTransfer: catarse.model('balance_transfers'),
    user: catarse.model('users'),
    survey: catarse.model('surveys'),
    userCreditCard: catarse.model('user_credit_cards'),
    bankAccount: catarse.model('bank_accounts'),
    bank: catarse.model('banks'),
    goalDetail: catarse.model('goals'),
    rewardDetail: catarse.model('reward_details'),
    projectReminder: catarse.model('project_reminders'),
    projectReport: catarse.model('project_reports'),
    contributions: catarse.model('contributions'),
    directMessage: catarse.model('direct_messages'),
    teamTotal: catarse.model('team_totals'),
    recommendedProjects: catarse.model('recommended_projects'),
    projectAccount: catarse.model('project_accounts'),
    projectAccountError: catarse.model('project_account_errors'),
    projectContribution: catarse.model('project_contributions'),
    projectContributiorsStat: catarse.model('project_stat_contributors'),
    projectPostDetail: catarse.model('project_posts_details'),
    projectContributionsPerDay: catarse.model('project_contributions_per_day'),
    projectContributionsPerLocation: catarse.model('project_contributions_per_location'),
    projectContributionsPerRef: catarse.model('project_contributions_per_ref'),
    projectVisitorsPerDay: catarse.model('project_visitors_per_day'),
    projectTransfer: catarse.model('project_transfers'),
    project: catarse.model('projects'),
    adminProject: catarse.model('admin_projects'),
    projectSearch: catarse.model('rpc/project_search'),
    publicTags: catarse.model('public_tags'),
    category: catarse.model('categories'),
    categoryTotals: catarse.model('category_totals'),
    categoryFollower: catarse.model('category_followers'),
    teamMember: catarse.model('team_members'),
    notification: catarse.model('notifications'),
    statistic: catarse.model('statistics'),
    successfulProject: catarse.model('successful_projects'),
    finishedProject: catarse.model('finished_projects'),
    userFriend: catarse.model('user_friends'),
    userFollow: catarse.model('user_follows'),
    followAllCreators: catarse.model('rpc/follow_all_creators'),
    sentSurveyCount: catarse.model('rpc/sent_survey_count'),
    answeredSurveyCount: catarse.model('rpc/answered_survey_count'),
    followAllFriends: catarse.model('rpc/follow_all_friends'),
    contributor: catarse.model('contributors'),
    userFollower: catarse.model('user_followers'),
    creatorSuggestion: catarse.model('creator_suggestions'),
    userContribution: catarse.model('user_contributions'),
    userSubscription: commonPayment.model('subscriptions'),
    shippingFee: catarse.model('shipping_fees'),
    deleteProject: catarse.model('rpc/delete_project'),
    cancelProject: catarse.model('rpc/cancel_project'),
    city: catarse.model('cities'),
    mailMarketingList: catarse.model('mail_marketing_lists')
};

models.teamMember.pageSize(40);
models.rewardDetail.pageSize(false);
models.shippingFee.pageSize(false);
models.projectReminder.pageSize(false);
models.goalDetail.pageSize(false);
models.project.pageSize(30);
models.category.pageSize(50);
models.contributionActivity.pageSize(40);
models.successfulProject.pageSize(9);
models.finishedProject.pageSize(9);
models.country.pageSize(false);
models.state.pageSize(false);
models.publicTags.pageSize(false);
models.projectContribution.pageSize(9);
models.contributor.pageSize(9);
models.projectReward.pageSize(false);
models.recommendedProjects.pageSize(3);
models.bank.pageSize(400);
models.city.pageSize(200);
models.balanceTransfer.pageSize(9);
models.userSubscription.pageSize(9);


export default models;
