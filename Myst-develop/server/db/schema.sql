CREATE TABLE developer (
    developer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    externalPage VARCHAR(150) NOT NULL
);

CREATE TABLE publisher (
    publisher_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    externalPage VARCHAR(150)
);

CREATE TABLE capabilities (
    capabilities_id SERIAL PRIMARY KEY NOT NULL,
    singlePlayer BOOLEAN NOT NULL,
    onlinePvP BOOLEAN NOT NULL,
    steamCloud BOOLEAN NOT NULL,
    antiCheat BOOLEAN NOT NULL,
    phone BOOLEAN NOT NULL,
    tablet BOOLEAN NOT NULL,
    remoteTogether BOOLEAN NOT NULL
);

CREATE TABLE game (
    game_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR(500) NOT NULL,
    release VARCHAR(100) NOT NULL,
    developer_id INTEGER NOT NULL REFERENCES developer(developer_id),
    publisher_id INTEGER NOT NULL REFERENCES publisher(publisher_id),
    deckCompatable BOOLEAN NOT NULL,
    capabilities_id INTEGER NOT NULL REFERENCES capabilities(capabilities_id),
    mainGenre VARCHAR(50) NOT NULL,
    gameWebsite VARCHAR(150) NOT NULL,
    metaCriticScore INTEGER NOT NULL,
    discountPercent INTEGER NOT NULL,
    aboutThisGame VARCHAR(500) NOT NULL
);

CREATE TABLE language (
    language_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE game_language (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES game(game_id),
    language_id INTEGER NOT NULL REFERENCES language(language_id)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    gamesOwned INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    reviewCount INTEGER NOT NULL,
    image VARCHAR(150) NOT NULL
);

CREATE TABLE reviews(
    reviews_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    recommended BOOLEAN NOT NULL,
    review VARCHAR(500) NOT NULL,
    game_id INTEGER NOT NULL REFERENCES game(game_id) ON DELETE CASCADE ON UPDATE CASCADE,
    helpfulCount INTEGER NOT NULL,
    nonHelpfulCount INTEGER NOT NULL,
    funnyCount INTEGER NOT NULL,
    award VARCHAR(150) NOT NULL,
    played BOOLEAN NOT NULL,
    gotItFree BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    hours_played INTEGER 
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    game_id INTEGER NOT NULL REFERENCES game(game_id)
);

CREATE TABLE bundle (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES game(game_id),
    name VARCHAR(150) NOT NULL,
    price INTEGER NOT NULL,
    discountPercent INTEGER NOT NULL,
    itemCount INTEGER NOT NULL
);

CREATE TABLE mods (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES game(game_id),
    name VARCHAR(150) NOT NULL
);
