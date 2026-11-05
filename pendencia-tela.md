# Pendências de telas

Telas que faltam na dashboard (`dashboard.html`) para alimentar o backend e os apps iOS e Android.

## Essenciais: o app depende delas

1. **Pacotes promocionais:** `DAS-01` e `PAC-01` mostram pacotes, mas não há CRUD.
2. **Novidades:** `NOV-01` e `LEI-01` precisam de CRUD de artigos, com imagem, categoria e texto.
3. **Pagamentos:** falta lista de pagamentos, com estado e reembolsos. Hoje só há valor estimado e ligação à Stripe.
4. **Consultórios:** os agendamentos mostram "Consultório 2", mas não há cadastro, nem regra de ocupação de sala.
5. **Pedidos de dados do cliente:** o app tem "Apagar conta". A clínica precisa receber e tratar esse pedido, conforme a regra jurídica de `CLI-07`.
6. **Telas do acesso do médico:** versão reduzida, com a própria agenda, horários e pausas.
7. **Recuperar senha do painel:** `LOG-01` já tem o link, mas falta a tela.

## Importantes: dá para resolver com pouco

8. **Segmentos de procedimentos:** cadastrar Faciais, Corporais e os demais. Hoje são fixos no formulário.
9. **Depoimentos:** `CAT-02` mostra, mas `PRC-03` não tem esse campo.
10. **Feriados e fechos da clínica:** hoje só existem pausas por médico.
11. **Textos legais:** Termos, Privacidade e consentimentos usados no app. Convém guardar versões, para saber o que cada cliente aceitou.
12. **Serviços HD Vita:** editar nomes, preços e links de `VIT-01` sem nova versão do app.
13. **Conteúdo fixo do app:** slides de `ENT-01` e número do WhatsApp de suporte.

## Estados de telas já feitas

- Agenda em visão Semana e Mês.
- Conflito de horário em `AGD-03`.
- Horários e pausas bloqueando a agenda.
- Filtro de médicos por procedimento, em `AGD-03` e `AGE-01`.
- Listas vazias, erros e carregamento.

## Regra do backend

O backend precisa de uma regra única de disponibilidade, somando horário da clínica, horário do médico, pausas, tempo do procedimento e intervalo. Painel e app devem consultar essa mesma regra, ou podem surgir horários duplicados.

## Ordem sugerida

1. Itens 1, 2, 3 e 4.
2. Itens 7, 8 e 9.
3. Item 6.

O item 5 depende da validação jurídica.
