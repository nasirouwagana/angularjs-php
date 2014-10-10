<form role="form" class="form-inline">
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Filtrer" ng-model="query">
        <select class="form-control" ng-model="order">
            <option value="matriculeetudiant">Organiser par matricule</option>
            <option value="nometudiant">Organiser par nom</option>
        </select>
    </div>
</form>

<br />

<div class="table-responsive" ng-controller="EtudiantsCtrl">
    <table class="table table-bordered table-striped">
        <colgroup>
            <col class="col-xs-1">
            <col class="col-xs-7">
        </colgroup>
        <thead>
            <tr>
                <th>ID</th>
                <th>Matricule</th>
                <th>Noms & Prenoms</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-show="loading">Loading...</tr>
            <tr ng-show="!loading" ng-repeat="etudiant in etudiants| filter: {nometudiant: query} | orderBy: order">
                <td>{{etudiant.idetudiant}}</td>
                <td>{{etudiant.matriculeetudiant}}</td>
                <td><a href="#/etudiant/{{etudiant.idetudiant}}">{{etudiant.nometudiant + ' ' + etudiant.prenometudiant}}</a></td>
            </tr>                                
        </tbody>
    </table>
</div>