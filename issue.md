```
php artisan key:generate
$environment = App::environment();
$value = config('app.timezone', 'Asia/Seoul');
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
php artisan storage:link
->whereNumeric('id')->whereAlpha('name');
Route::fallback(function () {
protected $middlewarePriority = [
php artisan make:controller ShowProfile --invokable
Route::resource('photos', PhotoController::class);
Route::apiResource('photos', PhotoController::class);
php artisan make:controller API/PhotoController --api
Route::resource('photos.comments', PhotoCommentController::class);
Route::resource('photos.comments', CommentController::class)->shallow();
    Route::resourceVerbs([
        'create' => 'crear',
        'edit' => 'editar',
    ]);
$archived = $request->boolean('archived');
$input = $request->only(['username', 'password']);
$request->has('name')
$request->hasAny(['name', 'email'])
$path = $request->photo->store('images', 's3');
validatedData = $request->validate([
php artisan make:request StoreBlogPost
php artisan make:component Alert
@lang('messages.welcome')
'mix_url' => env('MIX_ASSET_URL', null)
php artisan make:policy PostPolicy
public function update(?User $user, Post $post)
public function before($user, $ability)
{
    if ($user->isSuperAdmin()) {
        return true;
    }
}
php artisan make:resource User
$router->get('user[/{name}]', function ($name = null) {
    return $name;
});
$router->get('user/{name:[A-Za-z]+}', function ($name) {
    //
});

app/Http/Middleware/Authenticate.php
/**
 * Get the path the user should be redirected to.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return string
 */
protected function redirectTo($request)
{
    return route('login');
}
```

```
docker system df
docker image prune
ENTRYPOINT? -d
ENV NODE_VERSION 7.2.0
docker container prune
docker volume prune
```

```
docker pull gitea/gitea:latest
sudo mkdir -p /var/lib/gitea
docker run -d --name=gitea -p 10022:22 -p 10080:3000 -v /var/lib/gitea:/data gitea/gitea:latest
```

```
/usr/local/Homebrew
brew tap
brew cask doctor
brew list --cask
brew update-reset
brew config
brew outdated
brew leaves
brew services start privoxy
brew info ruby@2.6
brew --repo
```
















