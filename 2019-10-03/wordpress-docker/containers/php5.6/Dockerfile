FROM php:5.6-fpm
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libxml++2.6-dev \
&& docker-php-ext-install -j$(nproc) pdo_mysql\
&& docker-php-ext-install -j$(nproc) gd \
&& docker-php-ext-install -j$(nproc) mysqli \
&& docker-php-ext-enable mysqli

RUN pecl install xdebug-2.5.5 \
	&& docker-php-ext-enable  xdebug

# WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar\
&& chmod +x wp-cli.phar\
&& mv wp-cli.phar /usr/local/bin/wp
