<!DOCTYPE html>
<html ng-app="cowsayApp">
  <head>
    <title>Welcome to Cowville!</title>
  </head>
  <body>
    <header>
      <nav ng-controller="NavController as navCtrl">
        <ul>
          <li ng-repeat="route in navCtrl.routes">
            <a href="{{ link.url }}">{{ route.name }}</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section
        class="container"
        ng-controller="CowsayController as cowsayCtrl"
        ng-init="cowsayCtrl.current = 'squirrel'">
        <h2>{{ cowsayCtrl.title }}</h2>

        <pre class="cow">
          {{ cowsayCtrl.update(cowsayCtrl.text) }}
        </pre>

        <form
          ng-submit="cowsayCtrl.speak(cowsayCtrl.text)"
          name="cowsayForm"
          no validate>
          <select ng-model="cowsayCtrl.current">
            <option ng-repeat="cowfile in cowsayCtrl.cowfiles" value="{{ cowfile }}">
              {{ cowfile }}
            </option>
          </select>

          <input type="text" ng-model="cowsayCtrl.text" required>
          <button type="submit">Speak!</button>

          <div ng-show="cowsayCtrl.spoken" class="history">
            <pre>
              {{ cowsayCtrl.spoken }}
            </pre>
            <button type="button" ng-click="cowsayCtrl.undo()">Undo!</button>
          </div>
        </form>
      </section>
    </main>
  </body>
</html>
