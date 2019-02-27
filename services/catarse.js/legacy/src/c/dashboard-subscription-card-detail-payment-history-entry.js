import m from 'mithril';
import _ from 'underscore';
import moment from 'moment';
import h from '../h';

const I18nScopePayment = _.partial(h.i18nScope, 'projects.payment');
const I18nScopePaymentMethod = _.partial(h.i18nScope, 'projects.payment_method');

const dashboardSubscriptionCardDetailPaymentHistoryEntry = {
    controller: function(args)
    {
        const statusClass = {
            paid: '.text-success',
            pending: '.text-waiting',
            refused: '.text-error',
            refunded: '.text-error',
            chargedback: '.text-error',
            deleted: '.text-error',
            error: '.text-error'
        };

        return {
            statusClass
        };
    },
    view: function(ctrl, args)
    {
        const 
            captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1),
            paymentStatus = args.payment.status,
            paymentAmount = args.payment.amount,
            paymentMethod = args.payment.payment_method,
            paymentDate = args.payment.created_at,
            paymentDetails = args.payment.payment_method_details,
            paymentMethodText = I18n.t(`${paymentMethod}`, I18nScopePaymentMethod()),
            paymentStatusText = I18n.t(`last_status.${paymentMethod}.${paymentStatus}`, I18nScopePayment()),
            paymentMethodEndText = (paymentMethod === 'boleto' ?
                ` com venc. ${moment(paymentDetails.expiration_date).format('DD/MM')}` : ( !_.isNull(paymentDetails.brand) && !_.isNull(paymentDetails.last_digits) ? ` ${captalize(paymentDetails.brand)} final ${paymentDetails.last_digits}` : ''));

        return m('.fontsize-smallest.w-row',
            [
                m('.w-col.w-col-3', m('.fontcolor-secondary', moment(paymentDate).format('DD/MM/YYYY'))),
                m('.w-col.w-col-9', 
                    m('div',
                        [
                            m(`span.fa.fa-circle${ctrl.statusClass[paymentStatus]}`, m.trust('&nbsp;')),
                            `R$${paymentAmount / 100} ${paymentStatusText} - ${captalize(paymentMethodText)} ${paymentMethodEndText}`
                        ]
                    )
                )
            ]
        );
    }
};

export default dashboardSubscriptionCardDetailPaymentHistoryEntry;
