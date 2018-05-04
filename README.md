# angular 5.2 and laravel 5.6 Authentication and crud


<a href="http://angular5.rbsavani.com">Demo</a>

#Installation steps 

1.Clone both repository <br>
2.in Frontend run below command <br>
	npm install and yarn install
3.In backend run below command <br>
	composer install<br>
    php artisan key:generate<br>
    php artisan migrate --seed<br>
    php artisan passport:install<br>
4.After you run passprt:install command you get 2 keys<br>
	take second key and set it in frontend/enviroments/environment.ts and frontend/enviroments/environment.prod.ts and set backend url ex: http://localhost:8000	<br>
    5.in fronetend run ng serve and in backend run php artisan serve 
    
