StartTest(function(t) {
    
	t.plan(1)
    
    var async0 = t.beginAsync()
    
    use('Task.Joose.Stable', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(Task.Joose.Stable, "Task.Joose.Stable is here")
        
        t.endAsync(async0)
    })
})    