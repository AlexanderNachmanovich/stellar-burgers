/// <reference types="cypress" />

const baseUrl = 'http://localhost:4000';
const modal = '[data-cy="modal"]';
const ingredientBun = '[data-cy="ingredient-643d69a5c3f7b9001cfa093c"]';
const ingredientsTopping = '[data-cy="constructor-ingredients"]';
const modalCloseButton = '[data-cy="modal-close-button"]';
const bunName = 'Краторная булка N-200i';

describe('Тестирование конструктора бургера', () => {
  beforeEach(() => {
    // Подмена запроса на получение ингредиентов
    cy.intercept('GET', '/api/ingredients', {
      fixture: 'ingredients.json'
    }).as('getIngredients');

    cy.viewport(1300, 800);
    cy.visit(baseUrl);
    cy.wait('@getIngredients'); // Ждём загрузки ингредиентов
  });

  it('Тест добавление булки, начинки и соусов', () => {
    // Проверка существования и видимости ингредиентов
    cy.get(ingredientBun).should('exist').find('button').click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa0941"]')
      .should('exist')
      .find('button')
      .click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa0942"]')
      .should('exist')
      .find('button')
      .click();

    // Проверяем, что ингредиенты добавлены в конструктор
    cy.get('[data-cy="constructor-bun-1"]').contains(bunName).should('exist');
    cy.get(ingredientsTopping)
      .contains('Биокотлета из марсианской Магнолии')
      .should('exist');
    cy.get(ingredientsTopping).contains('Соус Spicy-X').should('exist');
    cy.get('[data-cy="constructor-bun-2"]').contains(bunName).should('exist');
  });
});

describe('Тестирование работы модального окна', () => {
  beforeEach(() => {
    // Подмена запроса на получение ингредиентов
    cy.intercept('GET', '/api/ingredients', {
      fixture: 'ingredients.json'
    }).as('getIngredients');

    cy.viewport(1300, 800);
    cy.visit(baseUrl);
    cy.wait('@getIngredients'); // Ждём загрузки ингредиентов

    // Открываем модальное окно для тестов
    cy.get(ingredientBun).should('exist').click();
  });

  it('Тест открытие модального окна', () => {
    cy.get(modal).should('be.visible');
    cy.get(modal).contains(bunName).should('exist');
    cy.get(modalCloseButton).should('exist');
  });

  it('Тест закрытия модального окна кнопкой', () => {
    cy.get(modalCloseButton).click();
    cy.get(modal).should('not.exist');
  });

  it('Тест закрытия модального окна через оверлей', () => {
    cy.get('[data-cy="modal-overlay"]').click({ force: true });
    cy.get(modal).should('not.exist');
  });
});

describe('Тестирование оформления заказа', () => {
  beforeEach(() => {
    // Подмена запросов для авторизации и создания заказа
    cy.intercept('GET', '/api/ingredients', {
      fixture: 'ingredients.json'
    }).as('getIngredients');
    cy.intercept('GET', '/api/auth/user', {
      fixture: 'user.json'
    });
    cy.intercept('POST', '/api/orders', {
      fixture: 'order.json'
    }).as('createOrder');

    // Устанавливаем токены для авторизации
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    );
    cy.setCookie('accessToken', 'test-accessToken');

    cy.viewport(1300, 800);
    cy.visit(baseUrl);
    cy.wait('@getIngredients'); // Ждём загрузки ингредиентов
  });

  afterEach(() => {
    // Очистка локального хранилища и куки после теста
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('Тест создание заказа', () => {
    // Добавление ингредиентов в конструктор
    cy.get(ingredientBun).should('exist').find('button').click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa0941"]')
      .should('exist')
      .find('button')
      .click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa0942"]')
      .should('exist')
      .find('button')
      .click();

    // Нажимаем "Оформить заказ"
    cy.get('[data-cy="order-button"] button').should('exist').click();
    cy.wait('@createOrder'); // Ждём завершения запроса на создание заказа

    // Проверяем, что модальное окно с заказом открылось
    cy.get(modal).should('be.visible');
    cy.get(modal).contains('64471').should('exist');

    // Закрываем модальное окно и проверяем, что конструктор пуст
    cy.get(modalCloseButton).click();
    cy.get(modal).should('not.exist');

    cy.get('[data-cy="constructor-bun-1"]').should('not.exist');
    cy.get(ingredientsTopping)
      .contains('Биокотлета из марсианской Магнолии')
      .should('not.exist');
    cy.get(ingredientsTopping).contains('Соус Spicy-X').should('not.exist');
    cy.get('[data-cy="constructor-bun-2"]').should('not.exist');
  });
});
