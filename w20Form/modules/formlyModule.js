define([
    '{angular}/angular',
    '{angular-resource}/angular-resource'

], function (angular) {
    'use strict';

    var module = angular.module('formlyModule', ['ngResource']);

    module.controller('FormlyController', ['$scope', function ($scope) {

        var form = {
            layout: [1, 1, 2],
            fields: [
                { h1: "Title" },
                { template: '<hr />' },
                {
                    key: 'username',
                    type: 'input',
                    templateOptions: {
                        label: 'Username',
                        placeholder: 'johndoe',
                        required: true,
                        maxlength: 10,
                        minlength: 6
                    }
                },
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        required: true
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.username' // disabled when username is blank
                    }
                }
            ]
        };

        $scope.userForm = {
            model: {},
            fields: [
                {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Description',
                        placeholder: 'johndoe',
                        required: true,
                        maxlength: 10,
                        minlength: 6,
                        rows: 5
                    }
                },
                {
                    key: 'username',
                    type: 'text',
                    templateOptions: {
                        label: 'Username',
                        placeholder: 'johndoe',
                        required: true,
                        maxlength: 10,
                        minlength: 6
                    }
                },
                {
                    key: 'password',
                    type: 'password',
                    templateOptions: {
                        label: 'Password',
                        required: true
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.username' // disabled when username is blank
                    }
                },
                {
                    template: '<h1> Title </h1>'
                },
                {
                    key: 'date',
                    type: 'date',
                    templateOptions: {
                        label: 'Date',
                        required: true
                    }

                },
                {
                    key: 'check',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Check'
                    }

                },
                {
                    key: 'radio',
                    type: 'radio',
                    templateOptions: {
                        name: 'radioGroup',
                        label: 'One',
                        value: 'one'
                    }

                },
                {
                    key: 'radio',
                    type: 'radio',
                    templateOptions: {
                        name: 'radioGroup',
                        label: 'Two',
                        value: 'two'
                    }

                }
            ]
        };


        $scope.userForm.onSubmit = onSubmit;


        function onSubmit() {
            console.log('form submitted:', userForm.model);
        }

    }
    ])
    ;

    return {
        angularModules: ['formlyModule']
    };
})
;
