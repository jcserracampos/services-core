window.c.pages.Flex = (function(m, c, h) {
    return {
        controller: function() {
          const builder = {};
          return {
            builder: builder
          };
        },
        view: function(ctrl, args) {
            return [
                m('.w-section.hero-full.hero-zelo', [
                    m('.w-container.u-text-center', [
                        m('img.logo-flex-home[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/5626e670595f80b338f5bf5c_logo-flex.png\'][width=\'359\']'),
                        m('.w-editable.fontsize-large.u-marginbottom-60', [
                            'Vamos construir uma nova modalidade de crowdfunding para o Catarse!  ',
                            m('br'), 'Junte-se a nós, inscreva seu email!'
                        ]),
                        m('.w-row', [
                            m('.w-col.w-col-2'),
                            m.component(c.landingSignup, {builder: ctrl.builder}),
                            m('.w-col.w-col-2')
                        ])
                    ])
                ]), [
                    m('.section', [
                        m('.w-container', [
                            m('.w-editable.fontsize-largest.u-margintop-40.u-text-center', 'Pra quem será?'), m('.w-editable.fontsize-base.u-text-center.u-marginbottom-60', 'Iniciaremos a fase de testes com categorias de projetos específicas'), m('div', [
                                m('.w-row.u-marginbottom-60', [
                                     m('.w-col.w-col-6', [
                                        m('.u-text-center.u-marginbottom-20', [
                                            m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e393a01b66e250aca67cb_icon-zelo-com.png\'][width=\'210\']'), m('.w-editable.fontsize-largest.lineheight-loose', 'Causas')
                                        ]), m('p.w-editable.fontsize-base', 'Flexibilidade para causas de impacto! Estaremos abertos a campanhas de organizações ou pessoas físicas para arrecadação de recursos para causas pessoais, projetos de assistencialismo, saúde, ajudas humanitárias, proteção aos animais, empreendedorismo socioambiental, ativismo ou qualquer coisa que una as pessoas para fazer o bem.')
                                    ]), m('.w-col.w-col-6', [
                                        m('.u-text-center.u-marginbottom-20', [
                                            m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e3929a0daea230a5f12cd_icon-zelo-pessoal.png\'][width=\'210\']'), m('.w-editable.fontsize-largest.lineheight-loose', 'Vaquinhas')
                                        ]), m('p.w-editable.fontsize-base', 'Pessoas se juntam para compartilhar custos faz tempo. Por isso o flex estará aberto a campanhas de pessoas que querem arrecadar dinheiro junto a quem se importa. De custos de estudos a realizar um casamento. De juntar a grana para fazer aquela festa a comprar presentes para alguém com a ajuda da galera. Faça vaquinhas ágeis e pessoais com o Flex.')
                                    ])
                                ])
                            ])
                        ])
                    ]), m('.w-section.section.bg-greenlime.fontcolor-negative', [
                        m('.w-container', [
                            m('.w-editable.fontsize-largest.u-margintop-40.u-marginbottom-60.u-text-center', 'Como funcionará?'), m('.w-row.u-marginbottom-40', [
                                m('.w-col.w-col-6', [
                                    m('.u-text-center', [
                                        m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e39c578b284493e2a428a_zelo-money.png\'][width=\'180\']')
                                    ]), m('.w-editable.fontsize-large.u-marginbottom-10.u-text-center.fontweight-semibold', 'Fique com quanto arrecadar'), m('p.w-editable.fontsize-base', 'O Flex é para impulsionar campanhas onde todo dinheiro é bem vindo! Você fica com tudo que arrecadar.')
                                ]), m('.w-col.w-col-6', [
                                    m('.u-text-center', [
                                        m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e39d37c013d4a3ee687d2_icon-reward.png\'][width=\'180\']')
                                    ]), m('.w-editable.fontsize-large.u-marginbottom-10.u-text-center.fontweight-semibold', 'Não precisa de recompensas'), m('p.w-editable.fontsize-base', 'Você não precisa oferecer recompensas aos seus apoiadores se não quiser. Oferecer recompensas é uma decisão sua, é opcional.')
                                ])
                            ]), m('.w-row.u-marginbottom-40', [
                                m('.w-col.w-col-6', [
                                    m('.u-text-center', [
                                        m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e39fb01b66e250aca67e3_icon-curad.png\'][width=\'180\']')
                                    ]), m('.w-editable.fontsize-large.u-marginbottom-10.u-text-center.fontweight-semibold', 'Você mesmo publica seu projeto'), m('p.w-editable.fontsize-base', 'Todos os projetos inscritos no Flex entram no ar e não fazemos a filtragem normal do Catarse Tudo ou Nada. Agilidade e facilidade para você captar recursos através da internet.')
                                ]), m('.w-col.w-col-6', [
                                    m('.u-text-center', [
                                        m('img[src=\'https://daks2k3a4ib2z.cloudfront.net/54b440b85608e3f4389db387/560e39e77c013d4a3ee687d4_icon-time.png\'][width=\'180\']')
                                    ]), m('.w-editable.fontsize-large.u-marginbottom-10.u-text-center.fontweight-semibold', 'Encerre a campanha quando quiser'), m('p.w-editable.fontsize-base', 'Não há limite de tempo para sua campanha. Para receber o dinheiro arrecadado por você, basta encerrá-la.')
                                ])
                            ])
                        ])
                    ]), m('.w-section.section', [
                        m('.w-container', [
                            m('.w-editable.fontsize-larger.u-text-center.u-marginbottom-60.u-margintop-40', 'Dúvidas'), m('.w-row.u-marginbottom-60', [
                                m('.w-col.w-col-6', [
                                    m.component(c.landingQA, {
                                        question: 'Quais as taxas do Catarse Flex?',
                                        answer: 'Como no Catarse, enviar um projeto não custa nada! Estamos estudando opções para entender qual será a taxa cobrada no serviço Catarse Flex.'
                                    }),
                                    m.component(c.landingQA, {
                                        question: 'De onde vem o dinheiro do meu projeto?',
                                        answer: 'Família, amigos, fãs e membros de comunidades que você faz parte são seus maiores colaboradores. São eles que irão divulgar sua campanha para as pessoas que eles conhecem, e assim o círculo de apoiadores vai aumentando e a sua campanha ganha força.'
                                    }),
                                    m.component(c.landingQA, {
                                        question: 'Qual a diferença entre CatarseFlex e Catarse?',
                                        answer: 'O Catarse utiliza o sistema Tudo ou Nada e o CatarseFlex vai testar a utilização do sistema de arrecadação flexível que estamos estudando. Diferentemente do Catarse, quando projetos só ficam com o dinheiro se baterem a meta, o Flex consiste em você ficar com o que arrecadar, independente de atingir a meta. Nosso sistema flexível será algo novo em relação aos modelos que existem atualmente no mercado. Esse teste serve também para entender o papel da modalidade Flex para a atual comunidade do Catarse.'
                                    }),
                                ]), m('.w-col.w-col-6', [
                                    m.component(c.landingQA, {
                                        question: 'Dá trabalho ter uma campanha no Catarse Flex?',
                                        answer: 'Cada campanha no Catarse tem sua própria particularidade e a quantidade de trabalho varia. Inscrever o projeto no CatarseFlex é muito fácil, mas uma campanha, que é como você faz as pessoas conhecerem o seu projeto, tem seus desafios. Inscreva seu email nessa página para saber mais sobre como captar recursos para campanhas Flex.'
                                    }),
                                    m.component(c.landingQA, {
                                        question: 'Por quê vocês querem fazer o CatarseFlex?',
                                        answer: 'Acreditamos que o ambiente do crowdfunding brasileiro ainda tem espaço para muitas ações, testes e experimentações para entender de fato o que as pessoas precisam. Sonhamos com tornar o financiamento coletivo um hábito no Brasil. O CatarseFlex é mais um passo nessa direção.'
                                    }),
                                    m.component(c.landingQA, {
                                        question: 'Quando vocês irão lançar o CatarseFlex?',
                                        answer: 'Ainda não sabemos quando abriremos o Flex para o público. Iremos primeiramente passar por um período de testes e depois estabelecer uma data de lançamento. Se você deseja acompanhar e receber notícias sobre essa caminhada, inscreva seu email nessa página.'
                                    })
                                ])
                            ])
                        ])
                    ]), m('.w-section.section-one-column.bg-catarse-zelo.section-large', [
                        m('.w-container.u-text-center', [
                            m('.w-editable.u-marginbottom-40.fontsize-larger.lineheight-tight.fontcolor-negative', 'O Flex é um experimento e iniciativa do Catarse, maior plataforma de crowdfunding do Brasil.   '), m('.w-row.u-text-center', [
                                m('.w-col.w-col-4', [
                                    m('.fontsize-jumbo.text-success.lineheight-loose', '200.000'), m('p.start-stats.fontsize-base.fontcolor-negative', 'Pessoas ja apoiaram pelo menos 01 projeto no Catarse')
                                ]), m('.w-col.w-col-4', [
                                    m('.fontsize-jumbo.text-success.lineheight-loose', '1.000'), m('p.start-stats.fontsize-base.fontcolor-negative', 'Projetos ja foram financiados no Catarse')
                                ]), m('.w-col.w-col-4', [
                                    m('.fontsize-jumbo.text-success.lineheight-loose', '16 milhões'), m('p.start-stats.fontsize-base.fontcolor-negative', 'Foram investidos em ideias publicadas no Catarse')
                                ])
                            ])
                        ])
                    ]), m('.w-section.section-large.u-text-center.bg-blue-one', [
                        m('.w-container.fontcolor-negative', [
                            m('.w-editable.fontsize-largest', 'Fique por dentro!'), m('.w-editable.fontsize-base.u-marginbottom-60', 'Receba notícias e acompanhe a evolução do CatarseFlex'), m('.w-row', [
                                m('.w-col.w-col-2'),
                                m.component(c.landingSignup, {builder: ctrl.builder}),
                                m('.w-col.w-col-2')
                            ])
                        ])
                    ]), m('.w-section.section-large.bg-purple', [
                        m('.w-container', [
                            m('.u-text-center', [
                                m('.w-editable.fontsize-largest.fontcolor-negative', 'Construa o flex conosco'), m('.w-editable.fontsize-base.u-marginbottom-60.fontcolor-negative', 'Inicie uma conversa, pergunte, comente, critique e faça sugestões!')
                            ]), h.discuss('https://catarse.me/flex', 'flex_page')
                        ])
                    ])
                ]
            ];
        }
    };
}(window.m, window.c, window.c.h));
